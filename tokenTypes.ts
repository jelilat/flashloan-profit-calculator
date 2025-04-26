import { TransferLog, TraceCall } from "./assetChanges";

// Common interfaces
export interface TokenBalanceChange {
  [token: string]: {
    [address: string]: {
      amount: bigint;
      type: "Revenue" | "Cost" | "TokenTransfer";
    };
  };
}

export interface ProfitResult {
  token: string;
  profit: bigint;
}

// Constants
export const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";

// Set of WETH-like tokens
export const WETH_LIKE_TOKENS = new Set([
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
  // Add WBNB, WMATIC, etc as needed
]);
