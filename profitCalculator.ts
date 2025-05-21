import type { ProfitResult } from "./types";
import {
  revenueBalanceChanges,
  costBalanceChanges,
  addressParticipation,
  getTokenMetadata,
} from "./transferProcessor";
import { NULL_ADDRESS } from "./constants";

/**
 * Calculates the total profit for each token
 */
export function calculateProfitByToken(): ProfitResult[] {
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
        for (const token in addressParticipation[address]) {
          totalParticipation +=
            addressParticipation[address][token].participation;
        }

        // The address is a profit taker if it receives a token transfer without sending any tokens
        // i.e. It is not a swap
        if (
          totalParticipation % 2 === 1 &&
          !revenueBalanceChanges[address] &&
          address !== NULL_ADDRESS
        ) {
          console.log(
            `Token: ${address} is a profit taker with ${addressParticipation[address][token].participation} participations`
          );
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
    totalProfit.push({ token, profit });
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
