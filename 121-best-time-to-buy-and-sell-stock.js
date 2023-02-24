'use strict';

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maximumProfit = 0;
  let lowestPrice = Infinity;

  for (let price of prices) {
    maximumProfit = Math.max(maximumProfit, price - lowestPrice);

    if (price < lowestPrice) lowestPrice = price;
  }

  return maximumProfit;
};