# Flashloan Profit Calculator

This tool analyzes Ethereum transaction logs to calculate the profit made from flashloan arbitrage or other DeFi operations.

## Features

- Calculate profit directly from a transaction hash
- Analyze token transfers (ERC20) from logs
- Track ETH transfers from trace data
- Fetch token metadata for proper display
- CLI interface for easy usage

## Project Structure

The codebase is organized in a modular way:

- `tokenTypes.ts` - Type definitions and constants
- `transferProcessor.ts` - Process transfers and update balances
- `profitCalculator.ts` - Calculate profit from balance changes
- `index.ts` - Main API entry points
- `cli.ts` - Command-line interface

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the required API keys:
   ```
   ALCHEMY_API_KEY=your_alchemy_api_key
   COINGECKO_API_KEY=your_coingecko_api_key
   TENDERLY_NODE_ACCESS_KEY=your_tenderly_node_access_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
   DUNE_API_KEY=your_dune_api_key
   ```

## Usage

### Command Line Interface

Analyze a transaction:

```bash
npx ts-node cli.ts 0x123...abc
```

Where `0x123...abc` is the transaction hash you want to analyze.

### Programmatic Usage

Install the package:

```bash
npm install flashloan-profit-calculator
```

Use it in your project:

```typescript
import { calculateProfitFromTxHash } from 'flashloan-profit-calculator';

async function analyzeTx(txHash: string) {
  try {
    const profit = await calculateProfitFromTxHash(txHash);
    console.log('Raw profit data:', profit);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Analyze a transaction
analyzeTx('0x123...abc');
```

## How It Works

1. Fetches transaction details using Alchemy API
2. Extracts logs and traces from the transaction
3. Processes transfer logs to track token movements
4. Analyzes ETH transfers from trace data
5. Calculates profit by summing revenue and costs
6. Displays results with proper token information

## Requirements

- Node.js v14+
- TypeScript
- API keys for Alchemy, CoinGecko, Tenderly, Etherscan, and Dune
