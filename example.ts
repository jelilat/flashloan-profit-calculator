import { calculateProfitFromTxHash, displayProfitResults } from "./index";

// Run calculation with example data
async function runExample() {
  try {
    // Example using transaction hash
    const txHash = "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e";
    const results = await calculateProfitFromTxHash(txHash);

    await displayProfitResults(results);
  } catch (error) {
    console.error("Error calculating profit:", error);
  }
}

// Execute the example
runExample().catch(console.error);
