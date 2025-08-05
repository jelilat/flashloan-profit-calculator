import { TransactionAnalysis, TokenFlowChartData } from "./types";

class FlashloanAnalysisClient {
  private apiUrl: string;

  constructor(apiUrl: string = "http://localhost:3000") {
    this.apiUrl = apiUrl;
  }

  /**
   * Analyze a transaction and get detailed token flow data
   */
  async analyzeTransaction(txHash: string): Promise<TransactionAnalysis> {
    const response = await fetch(`${this.apiUrl}/analyze-transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ txHash }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to analyze transaction");
    }

    return response.json();
  }

  /**
   * Convert transaction analysis to chart data format
   */
  convertToChartData(analysis: TransactionAnalysis): TokenFlowChartData {
    const nodes: TokenFlowChartData["nodes"] = [];
    const edges: TokenFlowChartData["edges"] = [];

    // Create address nodes
    analysis.tokenFlows.forEach((flow) => {
      nodes.push({
        id: flow.address,
        label: this.formatAddress(flow.address),
        type: "address",
        role: flow.role,
        isProfitTaker: flow.isProfitTaker,
      });
    });

    // Create token nodes and edges
    const processedTokens = new Set<string>();

    analysis.tokenFlows.forEach((flow) => {
      Object.entries(flow.balanceChanges).forEach(([token, change]) => {
        // Add token node if not already added
        if (!processedTokens.has(token)) {
          nodes.push({
            id: token,
            label: change.symbol,
            type: "token",
          });
          processedTokens.add(token);
        }

        // Create edges based on balance changes
        const amount = BigInt(change.amount);
        if (amount > 0) {
          // Positive amount = token flows TO this address
          edges.push({
            from: token,
            to: flow.address,
            token: token,
            amount: change.amount,
            symbol: change.symbol,
            usdValue: change.usdValue,
            type: "in",
          });
        } else if (amount < 0) {
          // Negative amount = token flows FROM this address
          edges.push({
            from: flow.address,
            to: token,
            token: token,
            amount: (-amount).toString(),
            symbol: change.symbol,
            usdValue: change.usdValue ? -change.usdValue : undefined,
            type: "out",
          });
        }
      });
    });

    return { nodes, edges };
  }

  /**
   * Generate a text-based token flow chart (similar to the image shown)
   */
  generateTokenFlowChart(analysis: TransactionAnalysis): string {
    let chart = "";
    chart += `\n🔍 Token Flow Chart for Transaction: ${analysis.transactionHash}\n`;
    chart += `📊 Block: ${analysis.blockNumber} | Timestamp: ${new Date(
      analysis.blockTimestamp * 1000
    ).toISOString()}\n`;
    chart += `💰 Total Profit: $${analysis.totalProfitUSD.toFixed(2)}\n`;
    chart += `\n${"═".repeat(80)}\n`;

    // Header row
    const tokens = Array.from(
      new Set(
        analysis.tokenFlows.flatMap((flow) => Object.keys(flow.balanceChanges))
      )
    );

    const uniqueTokens = [...new Set(tokens)];
    const tokenSymbols = this.getTokenSymbols(uniqueTokens, analysis);

    chart += `\n${"Address".padEnd(42)} `;
    tokenSymbols.forEach((symbol) => {
      chart += `${symbol.padStart(12)} `;
    });
    chart += "\n";
    chart += `${"─".repeat(42)} `;
    tokenSymbols.forEach(() => {
      chart += `${"─".repeat(12)} `;
    });
    chart += "\n";

    // Data rows
    analysis.tokenFlows
      .sort((a, b) => {
        // Sort by role priority: sender > contract > profit_taker > others
        const roleOrder = {
          sender: 0,
          contract: 1,
          profit_taker: 2,
          builder: 3,
          participant: 4,
          unknown: 5,
        };
        return (
          (roleOrder[a.role as keyof typeof roleOrder] || 5) -
          (roleOrder[b.role as keyof typeof roleOrder] || 5)
        );
      })
      .forEach((flow) => {
        const roleIcon = this.getRoleIcon(flow.role, flow.isProfitTaker);
        const addressLabel = `${roleIcon} ${this.formatAddress(flow.address)}`;

        chart += `${addressLabel.padEnd(42)} `;

        uniqueTokens.forEach((token) => {
          const change = flow.balanceChanges[token];
          if (change) {
            const amount = Number(change.amount) / 10 ** change.decimals;
            const formattedAmount = this.formatAmount(amount);
            chart += `${formattedAmount.padStart(12)} `;
          } else {
            chart += `${"-".padStart(12)} `;
          }
        });
        chart += "\n";
      });

    chart += `\n${"═".repeat(80)}\n`;

    // Profit Summary
    chart += `\n📈 Profit Summary:\n`;
    analysis.profitSummary.forEach((profit) => {
      if (profit.profit !== 0) {
        chart += `  ${profit.symbol}: ${
          profit.profitFormatted
        } ($${profit.usdValue.toFixed(2)})\n`;
      }
    });

    // Transfer Statistics
    chart += `\n📊 Transfer Statistics:\n`;
    chart += `  Total Transfers: ${analysis.transferCounts.totalTransfers}\n`;
    chart += `  Unique Tokens: ${analysis.transferCounts.uniqueTokens}\n`;
    chart += `  Unique Addresses: ${analysis.transferCounts.uniqueAddresses}\n`;

    return chart;
  }

  private getTokenSymbols(
    tokens: string[],
    analysis: TransactionAnalysis
  ): string[] {
    return tokens.map((token) => {
      // Find symbol from any balance change
      for (const flow of analysis.tokenFlows) {
        if (flow.balanceChanges[token]) {
          return flow.balanceChanges[token].symbol;
        }
      }
      return token.substring(0, 8) + "...";
    });
  }

  private getRoleIcon(role: string, isProfitTaker: boolean): string {
    if (isProfitTaker) return "🎯";
    switch (role) {
      case "sender":
        return "📤";
      case "contract":
        return "📋";
      case "builder":
        return "🏗️";
      case "profit_taker":
        return "💰";
      default:
        return "👤";
    }
  }

  private formatAddress(address: string): string {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }

  private formatAmount(amount: number): string {
    if (amount === 0) return "0";
    if (Math.abs(amount) < 0.000001) return "~0";
    if (Math.abs(amount) < 1) return amount.toFixed(6);
    if (Math.abs(amount) < 1000) return amount.toFixed(2);
    if (Math.abs(amount) < 1000000) return `${(amount / 1000).toFixed(1)}K`;
    return `${(amount / 1000000).toFixed(1)}M`;
  }
}

// Example usage
async function example() {
  const client = new FlashloanAnalysisClient();

  try {
    // Analyze the transaction from your example
    const txHash = "0x0c3..c59d1"; // Replace with actual hash
    console.log(`Analyzing transaction: ${txHash}`);

    const analysis = await client.analyzeTransaction(txHash);

    // Generate text chart
    const chart = client.generateTokenFlowChart(analysis);
    console.log(chart);

    // Convert to chart data for visualization libraries
    const chartData = client.convertToChartData(analysis);
    console.log("\n📊 Chart Data for Visualization:");
    console.log("Nodes:", chartData.nodes.length);
    console.log("Edges:", chartData.edges.length);

    // You can now use chartData with libraries like:
    // - D3.js for custom visualizations
    // - Cytoscape.js for network graphs
    // - vis.js for network visualization
    // - Chart.js with custom network plugin
  } catch (error) {
    console.error("Error:", error);
  }
}

// React component example would require additional dependencies:
// npm install react @types/react
//
// export const TokenFlowChart: React.FC<{ txHash: string }> = ({ txHash }) => {
//   // Component implementation here
// };

export default FlashloanAnalysisClient;

// Run example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
}
