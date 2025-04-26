import { logs } from "./assetChanges";
import type { TraceCall, TransferLog } from "./assetChanges";
import { WETH_LIKE_TOKENS } from "./tokenTypes";
import {
  processTransferLog,
  processTraceCall,
  updateBuilderAddress,
  setupProcessor,
  resetState,
} from "./transferProcessor";
import {
  calculateProfitByToken,
  formatProfitsWithDecimals,
} from "./profitCalculator";
import { trace } from "./assetChanges";

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
  // Reset state for clean calculation
  resetState();

  // Setup the processor
  await updateBuilderAddress(blockNumber);
  setupProcessor(contract, sender);

  // Process transfer logs and trace data
  for (const log of logs.filter(
    (log) =>
      log.name === "Transfer" ||
      (log.name === "Withdrawal" && WETH_LIKE_TOKENS.has(log.raw.address))
  )) {
    processTransferLog(log);
  }

  processTraceCall(trace);

  // Calculate profit
  const profit = calculateProfitByToken();
  return profit;
}

/**
 * Format and display profit results
 */
export async function displayProfitResults(
  profitResults: { token: string; profit: bigint }[]
): Promise<void> {
  const formattedProfits = await formatProfitsWithDecimals(profitResults);
  console.log("Profit Summary:");
  for (const { token, symbol, decimals, profit } of formattedProfits) {
    console.log(
      `Token: ${token}, Profit: ${profit.toFixed(decimals)} ${symbol}`
    );
  }
}

// Example usage
if (require.main === module) {
  const runExample = async () => {
    try {
      const results = await calculateProfit(
        logs,
        trace,
        22100259,
        "0xbA58C9b54aCb83E66B8B58ED31E7b5e3adc74B00",
        "0xE556E36537FD64A5A9572961f0a5aa0f61997e68"
      );

      displayProfitResults(results);
    } catch (error) {
      console.error("Error calculating profit:", error);
    }
  };

  runExample().catch(console.error);
}
