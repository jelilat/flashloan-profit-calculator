import type { TransferLog, TraceCall } from "./assetChanges";
import { type TokenBalanceChange, ETH_ADDRESS } from "./tokenTypes";
import { Network, Alchemy, type TokenMetadataResponse } from "alchemy-sdk";
import dotenv from "dotenv";

dotenv.config();

// Initialize Alchemy
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

// State management
export const revenueBalanceChanges: TokenBalanceChange = {};
export const costBalanceChanges: TokenBalanceChange = {};
export const addressParticipation: { [address: string]: number } = {};

// Configuration variables
let builderAddress = "";
let contractAddress = "";
let senderAddress = "";

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
export function trackAddressParticipation(from: string, to: string): void {
  if (!addressParticipation[from]) addressParticipation[from] = 0;
  if (!addressParticipation[to]) addressParticipation[to] = 0;
  addressParticipation[from]++;
  addressParticipation[to]++;
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
  trackAddressParticipation(from, to);

  // Initialize balance changes
  const isFromSenderOrContract =
    from.toLowerCase() === senderAddress ||
    from.toLowerCase() === contractAddress;
  const isToSenderOrContract =
    to.toLowerCase() === senderAddress || to.toLowerCase() === contractAddress;

  initializeBalanceChanges(token, to, true, isToSenderOrContract);
  initializeBalanceChanges(token, from, false, isFromSenderOrContract);

  // Update balances
  if (to !== "0x0") {
    revenueBalanceChanges[token][to].amount += amount;
  }
  if (isBuilder(to)) {
    revenueBalanceChanges[token][to].amount *= -1n;
    revenueBalanceChanges[token][to].type = "Cost";
  } else {
    costBalanceChanges[token][from].amount -= amount;
  }
}

/**
 * Process a transfer log
 */
export function processTransferLog(log: TransferLog): void {
  const token = log.raw.address.toLowerCase();

  if (log.name === "Transfer") {
    const from =
      typeof log.inputs[0].value === "string"
        ? log.inputs[0].value.toLowerCase()
        : log.inputs[0].value.toString().toLowerCase();
    const to =
      typeof log.inputs[1].value === "string"
        ? log.inputs[1].value.toLowerCase()
        : log.inputs[1].value.toString().toLowerCase();
    const amount = BigInt(log.inputs[2].value);

    processTransfer(token, from, to, amount);
  }

  // Wrapped tokens deduct from the sender's balance during withdrawals but it's not logged
  // So we need to manually deduct the cost from the sender's balance
  if (log.name === "Withdrawal") {
    const from =
      typeof log.inputs[0].value === "string"
        ? log.inputs[0].value.toLowerCase()
        : log.inputs[0].value.toString().toLowerCase();
    const amount = BigInt(log.inputs[1].value);

    // Treat it like a WETH transfer out
    processTransfer(token, from, "0x0", amount);
  }
}

/**
 * Process trace calls recursively to catch ETH transfers
 */
export const processTraceCall = (calls: TraceCall[]): void => {
  for (const call of calls) {
    if (call.type === "CALL" && call.value && call.value !== "0x0") {
      const token = ETH_ADDRESS;
      const from = call.from.toLowerCase();
      const to = call.to.toLowerCase();
      const amount = BigInt(call.value);

      processTransfer(token, from, to, amount);
    }

    if (call.calls) {
      processTraceCall(call.calls);
    }
  }
};

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
  // Use for...of loop to iterate over object keys
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
