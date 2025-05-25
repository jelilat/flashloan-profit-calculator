import { Alchemy, Network } from "alchemy-sdk";
import dotenv from "dotenv";
import type { TraceCall } from "./types";
import { WETH_LIKE_TOKENS, WETH_FUNCTION_SIGNATURES } from "./constants";
dotenv.config();

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
async function getImplementationAddress(
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
