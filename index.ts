import { logs } from "./assetChanges";
import type { ProfitResult, TraceCall, TransferLog } from "./types";
import { WETH_LIKE_TOKENS } from "./constants";
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
  resetProfitTakers,
} from "./profitCalculator";

export let globalBlockNumber: number;
export let globalGasCostETH: number;
export let globalGasCostWei: string;
export let globalSenderAddress: string;
export let globalContractAddress: string;

/**
 * Calculate profit from a transaction hash
 */
export async function calculateProfitFromTxHash(
  txHash: string
): Promise<ProfitResult[]> {
  try {
    // Get transaction details
    let transactionDetails: {
      blockNumber: number;
      senderAddress: string;
      contractAddress: string;
      trace: unknown;
      logs: TransferLog[];
      gasCostETH: number;
      gasCostWei: string;
    };
    try {
      transactionDetails = await getTransactionDetails(txHash);
    } catch (error) {
      console.error(`Failed - Could not get transaction details: ${error}`);
      throw error;
    }

    const {
      blockNumber,
      senderAddress,
      contractAddress,
      trace,
      logs,
      gasCostETH,
      gasCostWei,
    } = transactionDetails;
    globalBlockNumber = transactionDetails.blockNumber;
    globalGasCostETH = gasCostETH;
    globalGasCostWei = gasCostWei;
    globalSenderAddress = senderAddress;
    globalContractAddress = contractAddress;

    // Calculate profit using the extracted data
    console.log(`Calculating profit for tx ${txHash}...`);
    let profit: ProfitResult[];
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
): Promise<ProfitResult[]> {
  try {
    console.log(
      `Starting profit calculation: Block ${blockNumber}, Contract ${contract}, Sender ${sender}`
    );
    console.log(
      `Processing ${logs.length} logs and ${trace.length} trace calls`
    );

    // Reset state for clean calculation
    resetState();
    resetProfitTakers();
    console.log("State reset complete");

    // Setup the processor
    try {
      await updateBuilderAddress(blockNumber);
      console.log(`Builder address updated: ${blockNumber}`);
    } catch (error) {
      console.error(`Failed to update builder address: ${error}`);
      // Continue with processing even if this fails
    }

    setupProcessor(contract, sender);
    console.log(
      `Processor setup complete: Contract ${contract}, Sender ${sender}`
    );

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
      console.log(`Processing ${trace.length} trace calls`);
      await processTraceCall(trace);
      console.log("Trace processing complete");
    } catch (error) {
      console.error(`Failed to process trace calls: ${error}`);
      // Continue with profit calculation
    }

    // Calculate profit
    try {
      console.log("Calculating profit...");
      const profit = await calculateProfitByToken();
      console.log(`Profit calculation complete. Found ${profit.length} tokens`);
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
  profitResults: ProfitResult[]
): Promise<void> {
  console.log("Profit Summary:");

  let totalProfit = 0;
  for (const result of profitResults) {
    try {
      // Try to get token metadata for better display
      const metadata = await getTokenMetadata(result.token);
      const decimals = metadata.decimals || 18;
      const symbol = metadata.symbol || "ETH";

      // Calculate human-readable profit
      const profit = Number(result.profit) / 10 ** decimals;
      const usd = result.usd * profit;
      totalProfit += usd;
      console.log(
        `Token: ${result.token} (${symbol}), Profit: ${profit.toFixed(
          decimals
        )} ${symbol}, USD: $${usd.toFixed(2)}`
      );
    } catch (error) {
      // If metadata can't be retrieved, display raw data
      const usd = (result.usd * Number(result.profit)) / 1e18;
      totalProfit += usd;

      console.log(
        `Token: ${result.token}, Profit: ${
          Number(result.profit) / 1e18
        } (raw), USD: $${usd.toFixed(2)}`
      );
    }
  }
  console.log(`Total Profit: $${totalProfit.toFixed(2)}`);
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
