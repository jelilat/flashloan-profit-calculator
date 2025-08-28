import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DuneClient } from "@duneanalytics/client-sdk";
import {
  calculateProfitFromTxHash,
  globalBlockNumber,
  globalGasCostETH,
  // globalGasCostWei,
  globalSenderAddress,
  globalContractAddress,
  flashloanContracts,
} from "../index";
import {
  revenueBalanceChanges,
  costBalanceChanges,
  addressParticipation,
  getTokenMetadata,
  blockTimestamp,
} from "../transferProcessor";
import {
  formatProfitsWithDecimals,
  getTokenUsdPriceAtTimestamp,
  detectedProfitTakers,
} from "../profitCalculator";
import { isFlashLoan } from "../transferProcessor";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Request deduplication - prevent duplicate analyses of same transaction
const activeRequests = new Map<string, Promise<TransactionAnalysis>>();

// Middleware
app.use(cors());
app.use(express.json());

// Types for API responses
interface TokenFlowData {
  address: string;
  symbol?: string;
  logo?: string;
  balanceChanges: {
    [token: string]: {
      amount: string;
      decimals: number;
      symbol: string;
      logo?: string;
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
  role: "sender" | "contract" | "builder" | "participant" | "unknown";
}

interface TransactionAnalysis {
  transactionHash: string;
  from: string;
  to: string;
  blockNumber: number;
  blockTimestamp: number;
  isFlashLoan: boolean;
  flashloanContracts: string[];
  totalRevenueUSD: number;
  totalCostUSD: number;
  totalProfitUSD: number;
  gasCostETH: number;
  gasCostUSD: number;
  tokenFlows: TokenFlowData[];
  profitSummary: Array<{
    token: string;
    symbol: string;
    logo?: string;
    decimals: number;
    profit: number;
    profitFormatted: string;
    usdValue: number;
  }>;
  transferCounts: {
    totalTransfers: number;
    uniqueTokens: number;
    uniqueAddresses: number;
  };
}

// Helper function to determine address role
function getAddressRole(
  address: string,
  senderAddress: string,
  contractAddress: string,
  builderAddress: string
): string {
  const addr = address.toLowerCase();
  // if (addr === senderAddress.toLowerCase()) return "sender";
  // if (addr === contractAddress.toLowerCase()) return "contract";
  if (addr === builderAddress.toLowerCase()) return "builder";

  // Check if it's a profit taker using the global detection
  if (detectedProfitTakers.has(addr)) {
    return "profit_taker";
  }

  return "participant";
}

// Helper function to check if address is a profit taker
function isProfitTaker(address: string): boolean {
  return detectedProfitTakers.has(address.toLowerCase());
}

// Main API endpoint
app.post("/analyze-transaction", async (req, res) => {
  try {
    const { txHash } = req.body;

    if (!txHash || typeof txHash !== "string") {
      return res.status(400).json({
        error: "Transaction hash is required and must be a string",
      });
    }

    // Check if this transaction is already being processed
    if (activeRequests.has(txHash)) {
      console.log(`Reusing existing analysis for transaction: ${txHash}`);
      const result = await activeRequests.get(txHash)!;
      return res.json(result);
    }

    console.log(`Starting new analysis for transaction: ${txHash}`);

    // Create and cache the analysis promise
    const analysisPromise = performTransactionAnalysis(txHash);
    activeRequests.set(txHash, analysisPromise);

    try {
      const result = await analysisPromise;
      res.json(result);
    } finally {
      // Clean up the cache
      activeRequests.delete(txHash);
    }
  } catch (error) {
    console.error("Error analyzing transaction:", error);
    res.status(500).json({
      error: "Failed to analyze transaction",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Separate function to perform the actual analysis
async function performTransactionAnalysis(
  txHash: string
): Promise<TransactionAnalysis> {
  // Calculate profits (this also populates the balance change data)
  const profitResults = await calculateProfitFromTxHash(txHash);

  // Format profits with decimals and USD values
  const formattedProfits = await formatProfitsWithDecimals(profitResults);

  // Calculate total revenue in USD
  const totalRevenueUSD = formattedProfits.reduce((sum, profit) => {
    return (
      sum +
      profit.profit *
        (profitResults.find((p) => p.token === profit.token)?.usd || 0)
    );
  }, 0);

  // Get ETH price for gas cost calculation
  const ethPrice =
    profitResults.find(
      (p) => p.token === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    )?.usd ||
    profitResults.find((p) => p.token.toLowerCase().includes("eth"))?.usd ||
    (await getTokenUsdPriceAtTimestamp(
      "ethereum",
      "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      blockTimestamp
    ));

  // Calculate gas cost in USD
  const gasCostUSD = globalGasCostETH * (ethPrice || 0);

  // Calculate net profit (revenue - gas costs)
  const totalProfitUSD = totalRevenueUSD - gasCostUSD;

  // Collect all unique addresses
  const allAddresses = new Set<string>();

  // Add addresses from revenue balance changes
  Object.keys(revenueBalanceChanges).forEach((token) => {
    Object.keys(revenueBalanceChanges[token]).forEach((address) => {
      allAddresses.add(address);
    });
  });

  // Add addresses from cost balance changes
  Object.keys(costBalanceChanges).forEach((token) => {
    Object.keys(costBalanceChanges[token]).forEach((address) => {
      allAddresses.add(address);
    });
  });

  // Add addresses from participation data
  Object.keys(addressParticipation).forEach((address) => {
    allAddresses.add(address);
  });

  // Build token flow data for each address
  const tokenFlows: TokenFlowData[] = [];

  for (const address of allAddresses) {
    const balanceChanges: TokenFlowData["balanceChanges"] = {};

    // Process revenue balance changes
    Object.keys(revenueBalanceChanges).forEach((token) => {
      if (revenueBalanceChanges[token][address]) {
        const change = revenueBalanceChanges[token][address];
        balanceChanges[token] = {
          amount: change.amount.toString(),
          decimals: 18, // Default, will be updated below
          symbol: token.substring(0, 8) + "...", // Default, will be updated below
          type: change.type,
        };
      }
    });

    // Process cost balance changes
    Object.keys(costBalanceChanges).forEach((token) => {
      if (costBalanceChanges[token][address]) {
        const change = costBalanceChanges[token][address];
        if (!balanceChanges[token]) {
          balanceChanges[token] = {
            amount: change.amount.toString(),
            decimals: 18,
            symbol: token.substring(0, 8) + "...",
            type: change.type,
          };
        } else {
          // Combine with existing revenue data
          const combinedAmount =
            BigInt(balanceChanges[token].amount) + change.amount;
          balanceChanges[token].amount = combinedAmount.toString();
        }
      }
    });

    // Get token metadata and USD values
    for (const token of Object.keys(balanceChanges)) {
      try {
        const metadata = await getTokenMetadata(token);
        balanceChanges[token].decimals = metadata.decimals || 18;
        balanceChanges[token].symbol =
          metadata.symbol || `${token.substring(0, 8)}...`;
        balanceChanges[token].logo = metadata.logo || undefined;

        // Calculate USD value
        const profit = profitResults.find((p) => p.token === token);
        if (profit) {
          const amount =
            Number(balanceChanges[token].amount) /
            10 ** balanceChanges[token].decimals;
          balanceChanges[token].usdValue = amount * profit.usd;
        }
      } catch (error) {
        console.warn(`Failed to get metadata for token ${token}:`, error);
      }
    }

    const participation = addressParticipation[address] || {};

    tokenFlows.push({
      address,
      balanceChanges,
      participation,
      isProfitTaker: isProfitTaker(address),
      role: getAddressRole(address, "", "", "") as any, // We don't have access to these here
    });
  }

  // Calculate transfer statistics
  const transferCounts = {
    totalTransfers:
      Object.keys(addressParticipation).reduce((sum, address) => {
        return (
          sum +
          Object.keys(addressParticipation[address]).reduce(
            (tokenSum, token) => {
              return (
                tokenSum +
                addressParticipation[address][token].toCount +
                addressParticipation[address][token].fromCount
              );
            },
            0
          )
        );
      }, 0) / 2, // Divide by 2 because each transfer is counted twice (from and to)
    uniqueTokens: new Set([
      ...Object.keys(revenueBalanceChanges),
      ...Object.keys(costBalanceChanges),
    ]).size,
    uniqueAddresses: allAddresses.size,
  };

  const response: TransactionAnalysis = {
    transactionHash: txHash,
    from: globalSenderAddress,
    to: globalContractAddress,
    blockNumber: globalBlockNumber,
    blockTimestamp: blockTimestamp,
    isFlashLoan,
    flashloanContracts: [...flashloanContracts],
    totalRevenueUSD,
    totalCostUSD: gasCostUSD,
    totalProfitUSD,
    gasCostETH: globalGasCostETH,
    gasCostUSD,
    tokenFlows,
    profitSummary: await Promise.all(
      formattedProfits.map(async (profit) => {
        const result = profitResults.find((p) => p.token === profit.token);
        let logo: string | undefined;
        try {
          const metadata = await getTokenMetadata(profit.token);
          logo = metadata.logo || undefined;
        } catch (error) {
          // Logo will remain undefined if metadata fetch fails
        }
        return {
          token: profit.token,
          symbol: profit.symbol,
          logo,
          decimals: profit.decimals,
          profit: profit.profit,
          profitFormatted: `${profit.profit.toFixed(6)} ${profit.symbol}`,
          usdValue: profit.profit * (result?.usd || 0),
        };
      })
    ),
    transferCounts,
  };

  return response;
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Get supported tokens endpoint
app.get("/tokens", async (req, res) => {
  try {
    const tokens = new Set([
      ...Object.keys(revenueBalanceChanges),
      ...Object.keys(costBalanceChanges),
    ]);

    interface TokenListItem {
      address: string;
      symbol: string;
      logo?: string;
      decimals: number;
      name: string;
    }
    const tokenList: TokenListItem[] = [];
    for (const token of tokens) {
      try {
        const metadata = await getTokenMetadata(token);
        tokenList.push({
          address: token,
          symbol: metadata.symbol || "Unknown",
          logo: metadata.logo || undefined,
          decimals: metadata.decimals || 18,
          name: metadata.name || "Unknown",
        });
      } catch (error) {
        tokenList.push({
          address: token,
          symbol: `${token.substring(0, 8)}...`,
          decimals: 18,
          name: "Unknown",
        });
      }
    }

    res.json(tokenList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch token data" });
  }
});

// Dune query endpoint
app.get("/flashloans", async (req, res) => {
  try {
    const { DUNE_API_KEY } = process.env;

    if (!DUNE_API_KEY) {
      return res.status(500).json({
        error: "DUNE_API_KEY not configured in environment variables",
      });
    }

    const client = new DuneClient(DUNE_API_KEY);

    const queryID = 5597175;

    // Allow query ID to be overridden via query parameter
    const requestedQueryId = req.query.queryId
      ? parseInt(req.query.queryId as string)
      : queryID;

    console.log(`Fetching Dune query ${requestedQueryId}...`);

    const executionResult = await client.getLatestResult({
      queryId: requestedQueryId,
      opts: { maxAgeHours: 2 },
    });

    if (!executionResult.result?.rows) {
      return res.status(404).json({
        error: "No data returned from Dune query",
        queryId: requestedQueryId,
      });
    }

    const response = {
      success: true,
      queryId: requestedQueryId,
      rowCount: executionResult.result.rows.length,
      data: executionResult.result.rows,
      metadata: {
        executionId: executionResult.execution_id,
        state: executionResult.state,
        fetchedAt: new Date().toISOString(),
      },
    };

    res.json(response);
  } catch (error) {
    console.error("Dune query error:", error);

    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes("ENOTFOUND")) {
        return res.status(503).json({
          error:
            "Unable to connect to Dune API. Please check your internet connection.",
          details: "DNS resolution failed for api.dune.com",
        });
      }

      return res.status(500).json({
        error: "Failed to fetch Dune data",
        details: error.message,
      });
    }

    res.status(500).json({
      error: "Unknown error occurred while fetching Dune data",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `🚀 Flashloan Profit Calculator API server running on port ${PORT}`
  );
  console.log(`📊 Endpoints:`);
  console.log(`  POST /analyze-transaction - Analyze a transaction hash`);
  console.log(`  GET  /tokens - Get supported tokens`);
  console.log(`  GET  /flashloans?queryId=<id> - Fetch flashloan data`);
  console.log(`  GET  /health - Health check`);
});

export default app;
