import type { ProfitResult } from "./types";
import {
  revenueBalanceChanges,
  costBalanceChanges,
  addressParticipation,
  getTokenMetadata,
} from "./transferProcessor";
import { NULL_ADDRESS, ETH_ADDRESS } from "./constants";
import { blockTimestamp } from "./transferProcessor";
import { COINGECKO_API_KEY } from "./utils";

// Global variable to store detected profit takers
export const detectedProfitTakers = new Set<string>();

/**
 * Reset detected profit takers (call this when starting new analysis)
 */
export function resetProfitTakers(): void {
  detectedProfitTakers.clear();
}

/**
 * Calculates the total profit for each token
 */
export async function calculateProfitByToken(): Promise<ProfitResult[]> {
  const totalProfit: ProfitResult[] = [];

  for (const token in revenueBalanceChanges) {
    let index = 0;

    // Calculate revenue
    const revenue = Object.values(revenueBalanceChanges[token]).reduce(
      (sum, balance) => {
        if (balance.type === "Revenue" || balance.type === "Cost") {
          index++;
          return sum + balance.amount;
        }

        const address = Object.keys(revenueBalanceChanges[token])[index];

        // get totalAddressParticipation
        let totalParticipation = 0;
        let totalToCount = 0;
        let totalFromCount = 0;
        for (const token in addressParticipation[address]) {
          totalParticipation +=
            addressParticipation[address][token].participation;
          totalToCount += addressParticipation[address][token].toCount;
          totalFromCount += addressParticipation[address][token].fromCount;
        }

        // The address is a profit taker if it receives a token transfer without sending any tokens
        // i.e. It is not a swap
        if (
          totalParticipation % 2 === 1 &&
          totalToCount !== totalFromCount &&
          !revenueBalanceChanges[address] &&
          address !== NULL_ADDRESS
        ) {
          console.log(`${address} is a profit taker`);
          detectedProfitTakers.add(address.toLowerCase());
          index++;
          return sum + balance.amount;
        }

        index++;
        return sum;
      },
      0n
    );

    // Calculate cost
    const cost = Object.values(costBalanceChanges[token]).reduce(
      (sum, balance) => (balance.type === "Cost" ? sum + balance.amount : sum),
      0n
    );

    const profit = revenue + cost;
    const price = await getTokenUsdPriceAtTimestamp(
      "ethereum", // TODO: Make this configurable
      token,
      blockTimestamp
    );
    totalProfit.push({ token, profit, usd: price ?? 0 });
  }

  return totalProfit;
}

/**
 * Format profits for display with decimal conversion
 */
export async function formatProfitsWithDecimals(
  profits: ProfitResult[]
): Promise<
  { token: string; symbol: string; decimals: number; profit: number }[]
> {
  return Promise.all(
    profits.map(async ({ token, profit }) => {
      const metadata = await getTokenMetadata(token);
      return {
        token: token,
        symbol: metadata.symbol ?? token,
        decimals: metadata.decimals ?? 18,
        profit: Number(profit) / 10 ** (metadata.decimals ?? 18),
      };
    })
  );
}

export async function getTokenUsdPriceAtTimestamp(
  coingeckoId: string,
  contract: string,
  timestamp: number
): Promise<number | null> {
  const from = timestamp;
  const to = timestamp + 3600; // +1 hour
  const url =
    contract === ETH_ADDRESS
      ? `https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${from}&to=${to}&precision=2`
      : `https://api.coingecko.com/api/v3/coins/${coingeckoId}/contract/${contract}/market_chart/range?vs_currency=usd&from=${from}&to=${to}&precision=2`;
  const resp = await fetch(url, {
    headers: {
      "x-cg-demo-api-key": COINGECKO_API_KEY ?? "",
    },
  });
  const data = await resp.json();
  if (!data.prices || data.prices.length === 0) return null;
  // Use the first price in the range
  return data.prices[0][1];
}
