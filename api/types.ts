// API Types for Token Flow Analysis

export interface TokenFlowData {
  address: string;
  symbol?: string;
  balanceChanges: {
    [token: string]: {
      amount: string;
      decimals: number;
      symbol: string;
      type: "Revenue" | "Cost" | "TokenTransfer";
      usdValue?: number;
    };
  };
  participation: {
    [token: string]: {
      toCount: number;
      fromCount: number;
      participation: number;
    };
  };
  isProfitTaker: boolean;
  role:
    | "sender"
    | "contract"
    | "builder"
    | "profit_taker"
    | "participant"
    | "unknown";
}

export interface ProfitSummary {
  token: string;
  symbol: string;
  decimals: number;
  profit: number;
  profitFormatted: string;
  usdValue: number;
}

export interface TransferCounts {
  totalTransfers: number;
  uniqueTokens: number;
  uniqueAddresses: number;
}

export interface TransactionAnalysis {
  transactionHash: string;
  from: string;
  to: string;
  blockNumber: number;
  blockTimestamp: number;
  totalRevenueUSD: number;
  totalCostUSD: number;
  totalProfitUSD: number;
  gasCostETH: number;
  gasCostUSD: number;
  tokenFlows: TokenFlowData[];
  profitSummary: ProfitSummary[];
  transferCounts: TransferCounts;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
}

export interface AnalyzeTransactionRequest {
  txHash: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  details?: string;
}

export interface HealthResponse {
  status: "ok" | "error";
  timestamp: string;
}

// Visualization helper types
export interface TokenFlowChartData {
  nodes: Array<{
    id: string;
    label: string;
    type: "address" | "token";
    role?: string;
    isProfitTaker?: boolean;
  }>;
  edges: Array<{
    from: string;
    to: string;
    token: string;
    amount: string;
    symbol: string;
    usdValue?: number;
    type: "in" | "out";
  }>;
}

export interface SandwichAnalysis {
  frontrunTransaction?: string;
  backrunTransaction?: string;
  victimTransaction?: string;
  profitExtracted: number;
  profitExtractedUSD: number;
  tokens: Array<{
    token: string;
    symbol: string;
    amountExtracted: string;
    usdValue: number;
  }>;
}
