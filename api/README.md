# Flashloan Profit Calculator API

A comprehensive API for analyzing flashloan transactions and extracting detailed token flow data, perfect for generating visualizations like token flow charts similar to MEV analysis tools.

## Features

- 🔍 **Transaction Analysis**: Deep analysis of flashloan transactions
- 💰 **Profit Calculation**: Accurate profit calculation with USD valuations
- 📊 **Token Flow Tracking**: Detailed tracking of token movements between addresses
- 🎯 **Role Detection**: Automatic detection of profit takers, builders, and participants
- 📈 **Visualization Ready**: Data formatted for easy integration with chart libraries

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env file in the project root with:
ALCHEMY_API_KEY=your_alchemy_api_key
COINGECKO_API_KEY=your_coingecko_api_key
PORT=3000

# Build the project
npm run build

# Start the server
npm start

# Or run in development mode
npm run dev
```

## API Endpoints

### POST `/analyze-transaction`

Analyzes a transaction hash and returns comprehensive token flow data.

**Request Body:**
```json
{
  "txHash": "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e"
}
```

**Response:**
```json
{
  "transactionHash": "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e",
  "from": "0x1234567890abcdef1234567890abcdef12345678",
  "to": "0xabcdef1234567890abcdef1234567890abcdef12",
  "blockNumber": 18450123,
  "blockTimestamp": 1698765432,
  "totalRevenueUSD": 1275.50,
  "totalCostUSD": 24.75,
  "totalProfitUSD": 1250.75,
  "gasCostETH": 0.012345,
  "gasCostUSD": 24.75,
  "tokenFlows": [
    {
      "address": "0x9ae2...af13",
      "balanceChanges": {
        "0xa0b86991c31cc0c5c3f526cc2702308c09e4d0c4e": {
          "amount": "408105090",
          "decimals": 6,
          "symbol": "USDT",
          "type": "Revenue",
          "usdValue": 408.11
        }
      },
      "participation": {
        "0xa0b86991c31cc0c5c3f526cc2702308c09e4d0c4e": {
          "toCount": 1,
          "fromCount": 0,
          "participation": 1
        }
      },
      "isProfitTaker": true,
      "role": "profit_taker"
    }
  ],
  "profitSummary": [
    {
      "token": "0xa0b86991c31cc0c5c3f526cc2702308c09e4d0c4e",
      "symbol": "USDT",
      "decimals": 6,
      "profit": 408.105090,
      "profitFormatted": "408.105090 USDT",
      "usdValue": 408.11
    }
  ],
  "transferCounts": {
    "totalTransfers": 12,
    "uniqueTokens": 4,
    "uniqueAddresses": 8
  }
}
```

### GET `/tokens`

Returns a list of all tokens that have been processed.

**Response:**
```json
[
  {
    "address": "0xa0b86991c31cc0c5c3f526cc2702308c09e4d0c4e",
    "symbol": "USDT",
    "decimals": 6,
    "name": "Tether USD"
  }
]
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2023-10-31T12:00:00.000Z"
}
```

## Usage Examples

### Using the Client Library

```typescript
import FlashloanAnalysisClient from './api/client';

const client = new FlashloanAnalysisClient('http://localhost:3000');

// Analyze a transaction
const analysis = await client.analyzeTransaction(
  '0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e'
);

// Generate a text-based chart
const chart = client.generateTokenFlowChart(analysis);
console.log(chart);

// Convert to visualization data
const chartData = client.convertToChartData(analysis);
// Use with D3.js, Cytoscape.js, vis.js, etc.
```

### Using with cURL

```bash
# Analyze a transaction
curl -X POST http://localhost:3000/analyze-transaction \
  -H "Content-Type: application/json" \
  -d '{"txHash": "0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e"}'

# Get health status
curl http://localhost:3000/health

# Get supported tokens
curl http://localhost:3000/tokens
```

## Token Flow Chart Output

The API generates data that can be used to create token flow charts similar to this example:

```
🔍 Token Flow Chart for Transaction: 0x0c3..c59d1
📊 Block: 18450123 | Timestamp: 2023-10-31T12:00:00.000Z
💰 Revenue: $1,275.50 | 💸 Gas Cost: $24.75 | 📈 Net Profit: $1,250.75

================================================================================

Address                                           ETH         USDT         WETH         USDC
────────────────────────────────────────── ──────────── ──────────── ──────────── ────────────
🎯 0x9ae2...af13                                      -          408.11         -           -
📤 0x1f2F...Df387                                  <0.000001   -408.105090  6,149.141185   <0.000001
📋 0x3e2...02E3d                                      -      408.105090  -6,149.141185        -
🏗️ 0xE6D...0e76A                                     -            -         -      -1,817.292634
👤 0xF05...2939F                                      -            -       0.722450  -1,818.728878
👤 0x459...6aFe5                                      -            -         -       1,817.292634
👤 0xb57...c58f0                                      -            -         -              1,817
👤 0xa25...54767                                      -            -         -        -0.722661
👤 0x479...2077c                                      -            -         -        -0.002955
👤 0x4D8...aEE25                                      -            -         -         0.002839
📋 0x952...BAfe5                                   0.000313      -            -             -

================================================================================

📈 Profit Summary:
  USDT: 408.105090 USDT ($408.11)
  ETH: 0.000313 ETH ($0.64)

📊 Transfer Statistics:
  Total Transfers: 12
  Unique Tokens: 4
  Unique Addresses: 8
```

## Visualization Integration

### With D3.js

```javascript
// Convert API response to D3 format
const chartData = client.convertToChartData(analysis);

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", 800)
  .attr("height", 600);

// Create nodes and links
const nodes = chartData.nodes;
const links = chartData.edges.map(edge => ({
  source: edge.from,
  target: edge.to,
  value: parseFloat(edge.amount)
}));

// Implement D3 force simulation...
```

### With Cytoscape.js

```javascript
const chartData = client.convertToChartData(analysis);

const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [
    ...chartData.nodes.map(node => ({ data: node })),
    ...chartData.edges.map(edge => ({ 
      data: { 
        id: `${edge.from}-${edge.to}`,
        source: edge.from,
        target: edge.to,
        label: `${edge.amount} ${edge.symbol}`
      }
    }))
  ],
  style: [
    {
      selector: 'node[type="address"]',
      style: {
        'background-color': '#0074D9',
        'label': 'data(label)'
      }
    },
    {
      selector: 'node[type="token"]',
      style: {
        'background-color': '#2ECC40',
        'label': 'data(label)'
      }
    }
  ]
});
```

## Data Structure

### TokenFlowData
- `address`: Ethereum address
- `balanceChanges`: Token balance changes for this address
- `participation`: Transfer participation statistics
- `isProfitTaker`: Whether this address extracted profit
- `role`: Role in the transaction (sender, contract, builder, profit_taker, participant)

### Balance Changes
- `amount`: Raw token amount (as string to handle big numbers)
- `decimals`: Token decimal places
- `symbol`: Token symbol
- `type`: Type of change (Revenue, Cost, TokenTransfer)
- `usdValue`: USD equivalent value

## Environment Variables

```bash
# Required
ALCHEMY_API_KEY=your_alchemy_api_key_here
COINGECKO_API_KEY=your_coingecko_api_key_here

# Optional
PORT=3000
```

## Error Handling

The API returns structured error responses:

```json
{
  "error": "Failed to analyze transaction",
  "details": "Transaction not found"
}
```

Common error codes:
- `400`: Invalid transaction hash format
- `404`: Transaction not found
- `500`: Internal processing error

## Performance Considerations

- Transaction analysis can take 5-30 seconds depending on complexity
- Results are not cached - consider implementing caching for production
- Large transactions with many token transfers may timeout
- Rate limiting is recommended for production deployments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

Apache-2.0 