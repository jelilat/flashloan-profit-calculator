#!/usr/bin/env node

import { calculateProfitFromTxHash, displayProfitResults } from "./index";

// Get transaction hash from command line argument
const txHash = process.argv[2];

if (!txHash) {
  console.error("Please provide a transaction hash as an argument");
  console.log("Usage: npx ts-node cli.ts <transaction-hash>");
  process.exit(1);
}

// Calculate profit from transaction hash
async function main() {
  try {
    console.log(`Calculating profit for transaction: ${txHash}`);

    const profit = await calculateProfitFromTxHash(txHash);

    console.log("\nAnalysis complete!");
    await displayProfitResults(profit);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main().catch(console.error);
