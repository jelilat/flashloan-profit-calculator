// Simple test script for the Flashloan Profit Calculator API

const API_URL = 'http://localhost:3000';

// Test transaction hash (replace with actual hash)
const TEST_TX_HASH = '0x4eaa9a30fabe363c883a557765f1512747011304db589dcc686156b42b613d5e';

async function testHealthEndpoint() {
  console.log('🏥 Testing health endpoint...');
  try {
    const response = await fetch(`${API_URL}/health`);
    const data = await response.json();
    console.log('✅ Health check passed:', data);
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
  }
}

async function testAnalyzeTransaction() {
  console.log('\n🔍 Testing transaction analysis...');
  console.log(`Transaction: ${TEST_TX_HASH}`);
  
  try {
    const response = await fetch(`${API_URL}/analyze-transaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ txHash: TEST_TX_HASH }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Analysis failed');
    }

    const analysis = await response.json();
    
    console.log('✅ Analysis completed successfully!');
    console.log(`📤 From: ${analysis.from}`);
    console.log(`📥 To: ${analysis.to}`);
    console.log(`💰 Revenue: $${analysis.totalRevenueUSD.toFixed(2)}`);
    console.log(`💸 Cost (Gas): $${analysis.totalCostUSD.toFixed(2)} (${analysis.gasCostETH.toFixed(6)} ETH)`);
    console.log(`📈 Net Profit: $${analysis.totalProfitUSD.toFixed(2)}`);
    console.log(`📊 Token Flows: ${analysis.tokenFlows.length} addresses`);
    console.log(`🪙 Unique Tokens: ${analysis.transferCounts.uniqueTokens}`);
    console.log(`🔄 Total Transfers: ${analysis.transferCounts.totalTransfers}`);
    
    // Show profit summary
    if (analysis.profitSummary.length > 0) {
      console.log('\n💸 Profit Summary:');
      analysis.profitSummary.forEach(profit => {
        if (profit.profit !== 0) {
          console.log(`  ${profit.symbol}: ${profit.profitFormatted} ($${profit.usdValue.toFixed(2)})`);
        }
      });
    }

  } catch (error) {
    console.error('❌ Transaction analysis failed:', error.message);
  }
}

async function testTokensEndpoint() {
  console.log('\n🪙 Testing tokens endpoint...');
  try {
    const response = await fetch(`${API_URL}/tokens`);
    const tokens = await response.json();
    console.log(`✅ Found ${tokens.length} tokens`);
    if (tokens.length > 0) {
      console.log('Sample tokens:', tokens.slice(0, 3));
    }
  } catch (error) {
    console.error('❌ Tokens endpoint failed:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  await testHealthEndpoint();
  await testAnalyzeTransaction();
  await testTokensEndpoint();
  
  console.log('\n✨ Tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testHealthEndpoint, testAnalyzeTransaction, testTokensEndpoint }; 