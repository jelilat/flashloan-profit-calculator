import type { TransferLog, TraceCall } from "./types";
import type { TokenBalanceChange } from "./types";
import { isWethLikeToken } from "./utils";
import { NULL_ADDRESS, ETH_ADDRESS } from "./constants";
import {
  Network,
  Alchemy,
  type TokenMetadataResponse,
  DebugTracerType,
  type TransactionReceipt,
  type DebugCallTrace,
} from "alchemy-sdk";
import dotenv from "dotenv";

dotenv.config();

// Initialize Alchemy
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET, // TODO: Make this configurable
};
const alchemy = new Alchemy(settings);

// State management
export const revenueBalanceChanges: TokenBalanceChange = {};
export const costBalanceChanges: TokenBalanceChange = {};
export interface AddressParticipationData {
  toCount: number;
  fromCount: number;
  participation: number;
}
export const addressParticipation: {
  [address: string]: { [token: string]: AddressParticipationData };
} = {};

// Configuration variables
let builderAddress = "";
let contractAddress = "";
let senderAddress = "";

// Known event signatures
const TRANSFER_EVENT_TOPIC =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const WITHDRAWAL_EVENT_TOPIC =
  "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65";
const DEPOSIT_EVENT_TOPIC =
  "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c";

/**
 * Update the builder address by fetching block information
 */
export const updateBuilderAddress = async (
  blockNumber: number
): Promise<void> => {
  const block = await alchemy.core.getBlock(blockNumber);
  builderAddress = block.miner;
};

/**
 * Check if an address is a builder
 */
export const isBuilder = (address: string): boolean => {
  return address.toLowerCase() === builderAddress.toLowerCase();
};

/**
 * Initialize balance changes for a token and address
 */
export function initializeBalanceChanges(
  token: string,
  address: string,
  isRevenue: boolean,
  isSenderOrContract: boolean
): void {
  if (address === "0x0") {
    return;
  }

  const balanceChanges = isRevenue ? revenueBalanceChanges : costBalanceChanges;

  if (!balanceChanges[token]) balanceChanges[token] = {};

  if (!balanceChanges[token][address]) {
    if (isSenderOrContract) {
      balanceChanges[token][address] = {
        amount: 0n,
        type: isRevenue ? "Revenue" : "Cost",
      };
    } else {
      balanceChanges[token][address] = {
        amount: 0n,
        type: "TokenTransfer",
      };
    }
  }
}

/**
 * Track address participation in transfers
 */
export function trackAddressParticipation(
  from: string,
  to: string,
  token: string
): void {
  // Initialize address data if not exists
  if (!addressParticipation[from]) addressParticipation[from] = {};
  if (!addressParticipation[to]) addressParticipation[to] = {};

  // Initialize token data for addresses if not exists
  if (!addressParticipation[from][token]) {
    addressParticipation[from][token] = {
      toCount: 0,
      fromCount: 0,
      participation: 0,
    };
  }

  if (!addressParticipation[to][token]) {
    addressParticipation[to][token] = {
      toCount: 0,
      fromCount: 0,
      participation: 0,
    };
  }

  // Update counts
  if (addressParticipation[from][token].fromCount === 0) {
    addressParticipation[from][token].participation++;
  }
  addressParticipation[from][token].fromCount++;

  if (addressParticipation[to][token].toCount === 0) {
    addressParticipation[to][token].participation++;
  }
  addressParticipation[to][token].toCount++;
}

/**
 * Process a transfer of tokens between addresses
 */
export function processTransfer(
  token: string,
  from: string,
  to: string,
  amount: bigint
): void {
  trackAddressParticipation(from, to, token);

  // Initialize balance changes
  const isFromSenderOrContract =
    from.toLowerCase() === senderAddress ||
    from.toLowerCase() === contractAddress;
  const isToSenderOrContract =
    to.toLowerCase() === senderAddress || to.toLowerCase() === contractAddress;

  initializeBalanceChanges(token, to, true, isToSenderOrContract);
  initializeBalanceChanges(token, from, false, isFromSenderOrContract);

  // Update balances
  if (to !== NULL_ADDRESS) {
    revenueBalanceChanges[token][to].amount += amount;
  }
  if (isBuilder(to)) {
    revenueBalanceChanges[token][to].amount *= -1n;
    revenueBalanceChanges[token][to].type = "Cost";
  } else {
    if (from !== NULL_ADDRESS) {
      costBalanceChanges[token][from].amount -= amount;
    }
  }
}

/**
 * Process a transfer log with error handling
 */
export function processTransferLog(log: TransferLog): void {
  try {
    const token = log.raw.address.toLowerCase();

    if (log.name === "Transfer") {
      try {
        const from =
          typeof log.inputs[0].value === "string"
            ? log.inputs[0].value.toLowerCase()
            : log.inputs[0].value.toString().toLowerCase();
        const to =
          typeof log.inputs[1].value === "string"
            ? log.inputs[1].value.toLowerCase()
            : log.inputs[1].value.toString().toLowerCase();
        const amount = BigInt(log.inputs[2].value);

        console.log(`Transfer: ${from} -> ${to}, amount: ${amount.toString()}`);
        processTransfer(token, from, to, amount);
      } catch (error) {
        console.error(`Error processing Transfer log: ${error}`);
      }
    }

    // Wrapped tokens deduct from the sender's balance during withdrawals but it's not logged
    // So we need to manually deduct the cost from the sender's balance
    if (log.name === "Withdrawal") {
      try {
        const from =
          typeof log.inputs[0].value === "string"
            ? log.inputs[0].value.toLowerCase()
            : log.inputs[0].value.toString().toLowerCase();
        const amount = BigInt(log.inputs[1].value);

        console.log(`Withdrawal: ${from}, amount: ${amount.toString()}`);
        // Treat it like a WETH transfer out
        processTransfer(token, from, NULL_ADDRESS, amount);
      } catch (error) {
        console.error(`Error processing Withdrawal log: ${error}`);
      }
    }

    // Wrapped tokens adds to the sender's balance during deposits but it's not logged
    // So we need to manually add the revenue to the sender's balance
    if (log.name === "Deposit") {
      try {
        const to =
          typeof log.inputs[0].value === "string"
            ? log.inputs[0].value.toLowerCase()
            : log.inputs[0].value.toString().toLowerCase();
        const amount = BigInt(log.inputs[1].value);

        console.log(`Deposit: ${to}, amount: ${amount.toString()}`);
        // Treat it like a WETH transfer in
        processTransfer(token, NULL_ADDRESS, to, amount);
      } catch (error) {
        console.error(`Error processing Deposit log: ${error}`);
      }
    }
  } catch (error) {
    console.error(`Failed to process log: ${error}`);
  }
}

/**
 * Process trace calls recursively to catch ETH transfers
 */
export const processTraceCall = async (calls: TraceCall[]): Promise<void> => {
  try {
    if (!calls || calls.length === 0) {
      console.log("No trace calls to process");
      return;
    }

    let processedCalls = 0;

    for (const call of calls) {
      try {
        // Handle ETH transfers
        if (call.type === "CALL" && call.value && call.value !== "0x0") {
          const token = ETH_ADDRESS;
          const from = call.from.toLowerCase();
          const to = call.to.toLowerCase();
          const amount = BigInt(call.value);

          console.log(
            `ETH Transfer: ${from} -> ${to}, amount: ${amount.toString()}`
          );
          processTransfer(token, from, to, amount);
          processedCalls++;
        }
        // Handle ERC20 transfers and WETH-like operations
        else if (call.type === "CALL" && call.input) {
          const input = call.input.slice(0, 10); // Get function signature
          const token = call.to.toLowerCase();

          // Check if this is a WETH-like token
          const isWethLike = await isWethLikeToken(token);

          // transfer(address,uint256)
          if (input === "0xa9059cbb") {
            const [to, amount] = decodeTransferInput(call.input);
            const from = call.from.toLowerCase();

            console.log(
              `ERC20 Transfer: ${from} -> ${to}, token: ${token}, amount: ${amount.toString()}`
            );
            processTransfer(token, from, to, amount);
            processedCalls++;
          }
          // transferFrom(address,address,uint256)
          else if (input === "0x23b872dd") {
            const [from, to, amount] = decodeTransferFromInput(call.input);

            console.log(
              `ERC20 TransferFrom: ${from} -> ${to}, token: ${token}, amount: ${amount.toString()}`
            );
            processTransfer(token, from, to, amount);
            processedCalls++;
          }
          // deposit() - WETH-like
          else if (input === "0xd0e30db0" && isWethLike) {
            const amount = BigInt(call.value || "0");
            const from = call.from.toLowerCase();

            console.log(`WETH Deposit: ${from}, amount: ${amount.toString()}`);
            // Treat it like a WETH transfer in
            processTransfer(token, NULL_ADDRESS, from, amount);
            processedCalls++;
          }
          // withdraw(uint256) - WETH-like
          else if (input === "0x2e1a7d4d" && isWethLike) {
            const amount = decodeWithdrawInput(call.input);
            const from = call.from.toLowerCase();

            console.log(`WETH Withdraw: ${from}, amount: ${amount.toString()}`);
            // Treat it like a WETH transfer out
            processTransfer(token, from, NULL_ADDRESS, amount);
            processedCalls++;
          }
        }

        if (call.calls && call.calls.length > 0) {
          // Recursively process nested calls
          await processTraceCall(call.calls);
        }
      } catch (error) {
        console.error(`Error processing trace call: ${error}`);
      }
    }
  } catch (error) {
    console.error(`Failed to process trace calls: ${error}`);
  }
};

// Helper functions to decode ERC20 function inputs
function decodeTransferInput(input: string): [string, bigint] {
  const data = input.slice(10); // Remove function signature
  const to = `0x${data.slice(24, 64)}`;
  const amount = BigInt(`0x${data.slice(64, 128)}`);
  return [to, amount];
}

function decodeTransferFromInput(input: string): [string, string, bigint] {
  const data = input.slice(10); // Remove function signature
  const from = `0x${data.slice(24, 64)}`;
  const to = `0x${data.slice(88, 128)}`;
  const amount = BigInt(`0x${data.slice(128, 192)}`);
  return [from, to, amount];
}

function decodeWithdrawInput(input: string): bigint {
  const data = input.slice(10); // Remove function signature
  return BigInt(`0x${data.slice(24, 64)}`);
}

/**
 * Setup the processor with contract and sender addresses
 */
export function setupProcessor(contract: string, sender: string): void {
  contractAddress = contract.toLowerCase();
  senderAddress = sender.toLowerCase();
}

export const getTokenMetadata = async (
  contract: string
): Promise<TokenMetadataResponse> => {
  return await alchemy.core.getTokenMetadata(contract);
};

/**
 * Reset all state
 */
export function resetState(): void {
  for (const key of Object.keys(revenueBalanceChanges)) {
    delete revenueBalanceChanges[key];
  }

  for (const key of Object.keys(costBalanceChanges)) {
    delete costBalanceChanges[key];
  }

  for (const key of Object.keys(addressParticipation)) {
    delete addressParticipation[key];
  }

  builderAddress = "";
  contractAddress = "";
  senderAddress = "";
}

/**
 * Get transaction details from a transaction hash
 */
export async function getTransactionDetails(txHash: string) {
  try {
    // Get transaction details
    let transaction: {
      from: string;
      to?: string;
      hash: string;
    } | null = null;

    try {
      transaction = await alchemy.core.getTransaction(txHash);
      if (!transaction) {
        throw new Error(`Transaction ${txHash} not found`);
      }
    } catch (error) {
      console.error(`Failed to get transaction: ${error}`);
      throw error;
    }

    // Get transaction receipt for logs
    let receipt: TransactionReceipt | null = null;
    try {
      receipt = await alchemy.core.getTransactionReceipt(txHash);
      if (!receipt) {
        throw new Error(`Transaction receipt for ${txHash} not found`);
      }
      console.log(`Got receipt with ${receipt.logs.length} logs`);
    } catch (error) {
      console.error(`Failed to get receipt: ${error}`);
      throw error;
    }

    // Get block number
    const blockNumber = receipt.blockNumber;

    // Get sender address
    const senderAddress = transaction.from.toLowerCase();

    // Get contract address (the "to" address of the transaction)
    const contractAddress = transaction.to?.toLowerCase() || "";

    // Get trace data - add a default tracer
    let trace: DebugCallTrace | null = null;
    try {
      trace = await alchemy.debug.traceTransaction(txHash, {
        type: DebugTracerType.CALL_TRACER,
      });
      console.log(
        `Got trace data: ${JSON.stringify(trace).substring(0, 200)}...`
      );
    } catch (error) {
      console.error(`Failed to get trace data: ${error}`);
      console.error(`Error details: ${JSON.stringify(error)}`);
      throw error;
    }

    // Process trace calls safely
    let traceCalls: unknown[] = [];
    try {
      if (Array.isArray(trace)) {
        traceCalls = trace;
      } else if (typeof trace === "object" && trace !== null) {
        const traceObj = trace as unknown as Record<string, unknown>;
        if (Array.isArray(traceObj.calls)) {
          traceCalls = traceObj.calls;
        }
      }
      console.log(`Extracted ${traceCalls.length} trace calls`);
    } catch (error) {
      console.error(`Failed to extract trace calls: ${error}`);
      // Continue with empty trace calls
    }

    // Parse logs from receipt
    let parsedLogs: TransferLog[];
    try {
      parsedLogs = parseLogsFromReceipt(receipt);
      console.log(`Parsed ${parsedLogs.length} logs from receipt`);
    } catch (error) {
      console.error(`Failed to parse logs: ${error}`);
      throw error;
    }

    return {
      blockNumber,
      senderAddress,
      contractAddress,
      trace: traceCalls,
      logs: parsedLogs,
    };
  } catch (error) {
    console.error(`Failed to get transaction details: ${error}`);
    console.error(`Stack trace: ${(error as Error).stack}`);
    throw error;
  }
}

/**
 * Parse logs from transaction receipt without relying on external ABIs
 */
function parseLogsFromReceipt(receipt: TransactionReceipt): TransferLog[] {
  try {
    const parsedLogs: TransferLog[] = [];

    for (const log of receipt.logs) {
      try {
        // Debug log data
        console.log(
          `Processing log: address=${
            log.address
          }, topics=${log.topics[0]?.substring(0, 10)}...`
        );

        // Handle Transfer events (ERC20/ERC721)
        if (log.topics[0] === TRANSFER_EVENT_TOPIC) {
          try {
            // Create a TransferLog object for the Transfer event
            const transferLog: TransferLog = {
              raw: {
                address: log.address.toLowerCase(),
                topics: log.topics,
                data: log.data,
              },
              name: "Transfer",
              anonymous: false,
              inputs: [
                {
                  name: "from",
                  value: padAddress(log.topics[1]),
                  type: "address",
                  indexed: true,
                },
                {
                  name: "to",
                  value: padAddress(log.topics[2]),
                  type: "address",
                  indexed: true,
                },
                {
                  name: "value",
                  value: parseAmountSafely(log.data),
                  type: "uint256",
                  indexed: false,
                },
              ],
            };
            console.log(
              `  Parsed Transfer: ${transferLog.inputs[0].value} -> ${transferLog.inputs[1].value}, amount: ${transferLog.inputs[2].value}`
            );
            parsedLogs.push(transferLog);
          } catch (error) {
            console.error(`  Failed to parse Transfer event: ${error}`);
          }
        }

        // Handle Withdrawal events (WETH)
        if (log.topics[0] === WITHDRAWAL_EVENT_TOPIC) {
          try {
            const withdrawalLog: TransferLog = {
              raw: {
                address: log.address.toLowerCase(),
                topics: log.topics,
                data: log.data,
              },
              name: "Withdrawal",
              anonymous: false,
              inputs: [
                {
                  name: "src",
                  value: padAddress(log.topics[1]),
                  type: "address",
                  indexed: true,
                },
                {
                  name: "wad",
                  value: parseAmountSafely(log.data),
                  type: "uint256",
                  indexed: false,
                },
              ],
            };
            console.log(
              `  Parsed Withdrawal: from ${withdrawalLog.inputs[0].value}, amount: ${withdrawalLog.inputs[1].value}`
            );
            parsedLogs.push(withdrawalLog);
          } catch (error) {
            console.error(`  Failed to parse Withdrawal event: ${error}`);
          }
        }

        // Handle Deposit events (WETH)
        if (log.topics[0] === DEPOSIT_EVENT_TOPIC) {
          try {
            const depositLog: TransferLog = {
              raw: {
                address: log.address.toLowerCase(),
                topics: log.topics,
                data: log.data,
              },
              name: "Deposit",
              anonymous: false,
              inputs: [
                {
                  name: "dst",
                  value: padAddress(log.topics[1]),
                  type: "address",
                  indexed: true,
                },
                {
                  name: "wad",
                  value: parseAmountSafely(log.data),
                  type: "uint256",
                  indexed: false,
                },
              ],
            };
            console.log(
              `  Parsed Deposit: to ${depositLog.inputs[0].value}, amount: ${depositLog.inputs[1].value}`
            );
            parsedLogs.push(depositLog);
          } catch (error) {
            console.error(`  Failed to parse Deposit event: ${error}`);
          }
        }
      } catch (error) {
        // Skip logs that can't be parsed
        console.warn(`Failed to process log: ${error}`);
      }
    }

    return parsedLogs;
  } catch (error) {
    console.error(`Fatal error in parseLogsFromReceipt: ${error}`);
    throw error;
  }
}

/**
 * Helper to convert a topic to an address
 */
function padAddress(topic?: string): string {
  if (!topic) return "0x0";
  return `0x${topic.substring(26).toLowerCase()}`;
}

/**
 * Parse amount safely to handle scientific notation
 */
function parseAmountSafely(hexValue: string): string {
  try {
    // Try to parse directly as BigInt first
    return BigInt(`0x${hexValue.substring(2)}`).toString();
  } catch (error) {
    try {
      // If direct parsing fails, use Number.parseInt and handle scientific notation
      const parsed = Number.parseInt(hexValue, 16);
      if (Number.isFinite(parsed)) {
        return parsed.toLocaleString("fullwide", { useGrouping: false });
      }
      throw new Error(`Invalid number: ${hexValue}`);
    } catch (err) {
      console.error(`Failed to parse amount ${hexValue}: ${err}`);
      return "0";
    }
  }
}
