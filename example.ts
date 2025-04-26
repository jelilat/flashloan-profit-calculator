import { calculateProfitFromTxHash, displayProfitResults } from "./index";

// Run calculation with example data
async function runExample() {
  try {
    const profit = await calculateProfitFromTxHash(
      "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e"
    );

    displayProfitResults(profit);
  } catch (error) {
    console.error("Error calculating profit:", error);
  }
}

// Execute the example
runExample();
