import { Alchemy, Network } from "alchemy-sdk";
import dotenv from "dotenv";
import type { TraceCall } from "./types";
import { WETH_LIKE_TOKENS, WETH_FUNCTION_SIGNATURES } from "./constants";
import { ethers } from "ethers";
dotenv.config();

export const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;
export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// Initialize Alchemy
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

// EIP-1967 implementation slot
const IMPLEMENTATION_SLOT =
  "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

/**
 * Get the implementation address of a proxy contract
 */
export async function getImplementationAddress(
  proxyAddress: string
): Promise<string | null> {
  try {
    const implementation = await alchemy.core.getStorageAt(
      proxyAddress,
      IMPLEMENTATION_SLOT
    );
    if (
      implementation &&
      implementation !==
        "0x0000000000000000000000000000000000000000000000000000000000000000"
    ) {
      return `0x${implementation.slice(-40)}`; // Convert to address format
    }
    return null;
  } catch (error) {
    console.error(
      `Error getting implementation address for ${proxyAddress}: ${error}`
    );
    return null;
  }
}

/**
 * Check if a token is WETH-like by examining its contract code
 */
export async function isWethLikeToken(tokenAddress: string): Promise<boolean> {
  try {
    // Skip if already known
    if (WETH_LIKE_TOKENS.has(tokenAddress)) {
      return true;
    }

    // Get contract code
    const code = await alchemy.core.getCode(tokenAddress);
    if (!code || code === "0x") {
      return false;
    }

    // First check the contract directly
    const hasWethFunctions = WETH_FUNCTION_SIGNATURES.some((sig) =>
      code.includes(sig)
    );

    if (hasWethFunctions) {
      // Add to known WETH-like tokens
      WETH_LIKE_TOKENS.add(tokenAddress);
      return true;
    }

    // If not found in direct code, check if this is a proxy contract
    const implementationAddress = await getImplementationAddress(tokenAddress);
    if (implementationAddress) {
      // Check the implementation contract
      const implementationCode = await alchemy.core.getCode(
        implementationAddress
      );
      if (!implementationCode || implementationCode === "0x") {
        return false;
      }
      console.log("implementationCode ", implementationAddress);

      // Check for WETH-like function signatures in implementation
      const hasWethFunctionsInImpl = WETH_FUNCTION_SIGNATURES.some((sig) =>
        implementationCode.includes(sig)
      );

      if (hasWethFunctionsInImpl) {
        // Add to known WETH-like tokens
        WETH_LIKE_TOKENS.add(tokenAddress);
        console.log("hasWethFunctionsInImpl ", hasWethFunctionsInImpl);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`Error checking WETH-like token ${tokenAddress}: ${error}`);
    return false;
  }
}

/**
 * Get all WETH-like tokens from a transaction's trace
 */
export async function findWethLikeTokens(trace: TraceCall[]): Promise<void> {
  try {
    const processedAddresses = new Set<string>();

    // Recursive function to process trace calls
    const processCalls = async (calls: TraceCall[]) => {
      for (const call of calls) {
        if (
          call.type === "CALL" &&
          call.to &&
          !processedAddresses.has(call.to)
        ) {
          processedAddresses.add(call.to);

          // Check if this is a WETH-like token
          if (await isWethLikeToken(call.to)) {
            console.log(`Found WETH-like token: ${call.to}`);
          }
        }

        // Process nested calls
        if (call.calls && call.calls.length > 0) {
          await processCalls(call.calls);
        }
      }
    };

    await processCalls(trace);
  } catch (error) {
    console.error(`Error finding WETH-like tokens: ${error}`);
  }
}

/**
 * Get event name from event topic and ABI
 * @param eventTopic The event topic (signature hash)
 * @param abi The contract ABI containing event definitions
 * @returns The event name or null if not found
 */
export function getEventNameFromTopic(
  eventTopic: string,
  abi: any[]
): string | null {
  try {
    // Create an interface from the ABI
    const contractInterface = new ethers.Interface(abi);

    // Get the event fragment from the topic
    const eventFragment = contractInterface.getEvent(eventTopic);

    return eventFragment ? eventFragment.name : null;
  } catch (error) {
    console.error(`Error decoding event topic ${eventTopic}: ${error}`);
    return null;
  }
}

/**
 * Get event name and decode parameters from log data
 * @param log The raw log object with topics and data
 * @param abi The contract ABI containing event definitions
 * @returns Decoded event information or null if not found
 */
export function decodeEventLog(
  log: { topics: string[]; data: string },
  abi: any[]
): {
  name: string;
  args: ethers.Result;
  signature: string;
} | null {
  try {
    if (!log.topics || log.topics.length === 0) {
      return null;
    }

    // Create an interface from the ABI
    const contractInterface = new ethers.Interface(abi);

    // The first topic is always the event signature
    const eventTopic = log.topics[0];

    // Parse the log
    const parsedLog = contractInterface.parseLog({
      topics: log.topics,
      data: log.data,
    });

    if (parsedLog) {
      return {
        name: parsedLog.name,
        args: parsedLog.args,
        signature: parsedLog.signature,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error decoding event log: ${error}`);
    return null;
  }
}

/**
 * Generate event signature hash from event name and parameter types
 * @param eventName The name of the event
 * @param paramTypes Array of parameter types (e.g., ['address', 'uint256'])
 * @returns The keccak256 hash of the event signature
 */
export function generateEventSignature(
  eventName: string,
  paramTypes: string[]
): string {
  const signature = `${eventName}(${paramTypes.join(",")})`;
  return ethers.id(signature);
}

/**
 * Fetch contract ABI from Etherscan API
 * @param contractAddress The contract address to get ABI for
 * @param apiKey Optional Etherscan API key (uses env var if not provided)
 * @returns The contract ABI as JSON array or null if not found/error
 */
export async function getContractABI(
  contractAddress: string,
  apiKey?: string
): Promise<any[] | null> {
  try {
    const key = apiKey || ETHERSCAN_API_KEY;

    if (!key) {
      console.warn(
        "No Etherscan API key provided. Set ETHERSCAN_API_KEY environment variable."
      );
      return null;
    }

    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${key}`;

    console.log(`Fetching ABI for contract: ${contractAddress}`);

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `Etherscan API request failed: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();

    if (data.status === "1" && data.result) {
      try {
        // Parse the ABI JSON string
        const abi = JSON.parse(data.result);
        console.log(
          `✅ Successfully fetched ABI for ${contractAddress} (${abi.length} items)`
        );
        return abi;
      } catch (parseError) {
        console.error(`Failed to parse ABI JSON: ${parseError}`);
        return null;
      }
    } else {
      console.error(`Etherscan API error: ${data.message || "Unknown error"}`);
      if (data.result === "Contract source code not verified") {
        console.warn("Contract source code is not verified on Etherscan");
      }
      return null;
    }
  } catch (error) {
    console.error(`Error fetching ABI from Etherscan: ${error}`);
    return null;
  }
}

/**
 * Get contract ABI and decode event logs in one go
 * @param contractAddress The contract address
 * @param logs Array of raw logs from the contract
 * @param apiKey Optional Etherscan API key
 * @returns Array of decoded logs with event names and arguments
 */
/**
 * Check if an ABI contains proxy-related functions/events
 */
function isProxyABI(abi: any[]): boolean {
  const proxyKeywords = [
    "implementation",
    "upgrade",
    "proxy",
    "admin",
    "beacon",
    "fallback",
    "delegate",
  ];

  // Check function and event names for proxy keywords
  const hasProxyElements = abi.some((item) => {
    if (item.type === "function" || item.type === "event") {
      const name = item.name?.toLowerCase() || "";
      return proxyKeywords.some((keyword) => name.includes(keyword));
    }
    return false;
  });

  // Check if ABI is very minimal (common for proxy contracts)
  // const isMinimal = abi.filter((item) => item.type === "function").length < 5;

  return hasProxyElements;
}

export async function getABIAndDecodeLog(
  contractAddress: string,
  log: { topics: string[]; data: string },
  apiKey?: string
): Promise<{
  name: string;
  args: ethers.Result | null;
  signature: string;
  raw: { topics: string[]; data: string };
}> {
  let abi = await getContractABI(contractAddress, apiKey);

  // Check if we have an ABI but it's a proxy ABI
  if (abi && isProxyABI(abi)) {
    console.log(
      `ABI found for ${contractAddress} but appears to be a proxy, checking for implementation...`
    );

    try {
      const implementationAddress = await getImplementationAddress(
        contractAddress
      );
      if (implementationAddress) {
        console.log(`Found implementation contract: ${implementationAddress}`);
        const implementationABI = await getContractABI(
          implementationAddress,
          apiKey
        );

        if (implementationABI && !isProxyABI(implementationABI)) {
          console.log(
            `✅ Using implementation ABI from ${implementationAddress}`
          );
          abi = implementationABI;
        } else {
          console.log(
            `Implementation ABI not found or also a proxy, using original ABI`
          );
        }
      }
    } catch (error) {
      console.warn(`Failed to check for implementation contract: ${error}`);
    }
  }

  // If no ABI found at all, check if it's an upgradeable contract
  else if (!abi) {
    console.log(
      `No ABI found for ${contractAddress}, checking for implementation contract...`
    );

    try {
      const implementationAddress = await getImplementationAddress(
        contractAddress
      );
      if (implementationAddress) {
        console.log(`Found implementation contract: ${implementationAddress}`);
        abi = await getContractABI(implementationAddress, apiKey);

        if (abi) {
          console.log(
            `✅ Successfully fetched implementation ABI for ${implementationAddress}`
          );
        }
      }
    } catch (error) {
      console.warn(`Failed to check for implementation contract: ${error}`);
    }
  }

  if (!abi) {
    console.warn(
      `Could not fetch ABI for ${contractAddress} or its implementation, returning raw logs`
    );
    return {
      name: "Unknown",
      args: null,
      signature: log.topics?.[0] || "No topic",
      raw: log,
    };
  }

  const decoded = decodeEventLog(log, abi);
  return {
    name: decoded?.name || "Unknown",
    args: decoded?.args || null,
    signature: decoded?.signature || log.topics?.[0] || "No topic",
    raw: log,
  };
}
