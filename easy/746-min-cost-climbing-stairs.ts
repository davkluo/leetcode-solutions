/**
 * Given an array of costs to climb stairs, and climbing 1 or 2 steps each time,
 * returns the minimum cost to reach the top floor
 *
 * Note: 2 <= cost.length <= 1000
 *
 * @param {number[]} cost
 * @returns {number}
 */
function minCostClimbingStairs(cost: number[]): number {
  const top = cost.length;

  let twoBehindCost = cost[0];
  let oneBehindCost = cost[1];

  for (let i = 2; i < top; i++) {
    const tmp = oneBehindCost;
    oneBehindCost = Math.min(oneBehindCost, twoBehindCost) + cost[i];
    twoBehindCost = tmp;
  }

  return Math.min(oneBehindCost, twoBehindCost);
}

// Time: O(n), Space: O(1)
