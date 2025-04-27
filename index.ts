import { logs } from "./assetChanges";
import type { TraceCall, TransferLog } from "./assetChanges";
import { WETH_LIKE_TOKENS } from "./tokenTypes";
import {
  processTransferLog,
  processTraceCall,
  updateBuilderAddress,
  setupProcessor,
  resetState,
  getTransactionDetails,
  getTokenMetadata,
} from "./transferProcessor";
import {
  calculateProfitByToken,
  formatProfitsWithDecimals,
} from "./profitCalculator";

/**
 * Calculate profit from a transaction hash
 */
export async function calculateProfitFromTxHash(txHash: string) {
  try {
    // Get transaction details
    let transactionDetails: {
      blockNumber: number;
      senderAddress: string;
      contractAddress: string;
      trace: unknown;
      logs: TransferLog[];
    };
    try {
      transactionDetails = await getTransactionDetails(txHash);
    } catch (error) {
      console.error(`Failed - Could not get transaction details: ${error}`);
      throw error;
    }

    const { blockNumber, senderAddress, contractAddress, trace, logs } =
      transactionDetails;

    // Calculate profit using the extracted data
    console.log(`Calculating profit for tx ${txHash}...`);
    let profit: { token: string; profit: bigint }[];
    try {
      profit = await calculateProfit(
        logs,
        trace as TraceCall[],
        blockNumber,
        contractAddress,
        senderAddress
      );

      // Log profit summary
      console.log("Profit Summary:");
      for (const item of profit) {
        console.log(
          `  Token: ${item.token}, Profit: ${item.profit.toString()}`
        );
      }
    } catch (error) {
      console.error(`Failed - Could not calculate profit: ${error}`);
      throw error;
    }

    console.log(`========== COMPLETED ANALYSIS FOR TX: ${txHash} ==========`);
    return profit;
  } catch (error) {
    console.error(`ANALYSIS FAILED FOR TX ${txHash}: ${error}`);
    console.error(`Stack trace: ${(error as Error).stack}`);
    throw error;
  }
}

/**
 * Main function to calculate profit from a transaction
 */
export async function calculateProfit(
  logs: TransferLog[],
  trace: TraceCall[],
  blockNumber: number,
  contract: string,
  sender: string
): Promise<{ token: string; profit: bigint }[]> {
  try {
    // Reset state for clean calculation
    resetState();

    // Setup the processor
    try {
      await updateBuilderAddress(blockNumber);
    } catch (error) {
      console.error(`Failed to update builder address: ${error}`);
      // Continue with processing even if this fails
    }

    setupProcessor(contract, sender);

    // Process transfer logs and trace data
    const filteredLogs = logs.filter(
      (log) =>
        log.name === "Transfer" ||
        (log.name === "Withdrawal" && WETH_LIKE_TOKENS.has(log.raw.address)) ||
        (log.name === "Deposit" && WETH_LIKE_TOKENS.has(log.raw.address))
    );

    try {
      for (const log of filteredLogs) {
        try {
          processTransferLog(log);
        } catch (error) {
          console.error(`Error processing log: ${error}`);
          // Continue with next log
        }
      }
    } catch (error) {
      console.error(`Failed to process logs: ${error}`);
      // Continue with trace processing
    }

    try {
      processTraceCall(trace);
    } catch (error) {
      console.error(`Failed to process trace calls: ${error}`);
      // Continue with profit calculation
    }

    // Calculate profit
    try {
      const profit = calculateProfitByToken();
      return profit;
    } catch (error) {
      console.error(`Failed to calculate profit: ${error}`);
      throw error;
    }
  } catch (error) {
    console.error(`Fatal error in calculateProfit: ${error}`);
    console.error(`Stack trace: ${(error as Error).stack}`);
    throw error;
  }
}

/**
 * Format and display profit results
 */
export async function displayProfitResults(
  profitResults: { token: string; profit: bigint }[]
): Promise<void> {
  console.log("Profit Summary:");

  for (const result of profitResults) {
    try {
      // Try to get token metadata for better display
      const metadata = await getTokenMetadata(result.token);
      const decimals = metadata.decimals || 18;
      const symbol = metadata.symbol || "ETH";

      // Calculate human-readable profit
      const profit = Number(result.profit) / 10 ** decimals;

      console.log(
        `Token: ${result.token} (${symbol}), Profit: ${profit.toFixed(
          decimals
        )} ${symbol}`
      );
    } catch (error) {
      // If metadata can't be retrieved, display raw data
      console.log(
        `Token: ${result.token}, Profit: ${Number(result.profit) / 1e18} (raw)`
      );
    }
  }
}

// Example usage
if (require.main === module) {
  const runExample = async () => {
    try {
      // Example using transaction hash
      const txHash =
        "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e";
      const results = await calculateProfitFromTxHash(txHash);

      await displayProfitResults(results);
    } catch (error) {
      console.error("Error calculating profit:", error);
    }
  };

  runExample().catch(console.error);
}
