import { logs, trace } from "./assetChanges";
import { calculateProfit, displayProfitResults } from "./index";

// Run calculation with example data
async function runExample() {
  try {
    const profit = await calculateProfit(
      logs,
      trace,
      22100259,
      "0xbA58C9b54aCb83E66B8B58ED31E7b5e3adc74B00",
      "0xE556E36537FD64A5A9572961f0a5aa0f61997e68"
    );

    displayProfitResults(profit);
  } catch (error) {
    console.error("Error calculating profit:", error);
  }
}

// Execute the example
runExample();
