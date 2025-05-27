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
  usd: number;
}

export interface TransferLog {
  name: string;
  anonymous: boolean;
  raw: {
    address: string;
    topics: string[];
    data: string;
  };
  inputs: {
    value: number | string;
    type: string;
    name: string;
    indexed: boolean;
  }[];
}

export interface TraceCall {
  from: string;
  to: string;
  value?: string;
  type: string;
  input: string;
  output?: string;
  error?: string;
  gas: string;
  gasUsed: string;
  calls?: TraceCall[];
}
