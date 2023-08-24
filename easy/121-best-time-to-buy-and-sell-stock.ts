/** Given an array of stock prices, determine the best time to buy and sell.
 *  Buy and sell dates must be different. Return 0 if no profit is achievable.
 *
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  let buyDay = 0;
  let maxProfit = 0; // Default value for if no profit is achievable

  for (let sellDay = 1; sellDay < prices.length; sellDay++) {
    const profit = prices[sellDay] - prices[buyDay];
    maxProfit = Math.max(maxProfit, profit);

    // If we have found a new lowest price, update buyDay
    if (profit < 0) {
      buyDay = sellDay;
    }
  }

  return maxProfit;
}

// Time: O(n), Space: O(1)
