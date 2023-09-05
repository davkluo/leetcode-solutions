/**
 * Given a target number of steps to climb, returns the number of ways you can
 * climb the number of steps if you can climb 1 or 2 steps each time.
 *
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n: number): number {
  if (n === 1) return n;

  let twoBehind = 1; // 1 way to reach n = 0
  let oneBehind = 1; // 1 way to reach n = 1

  for (let i = 1; i < n; i++) {
    const tmp = oneBehind;
    oneBehind = oneBehind + twoBehind;
    twoBehind = tmp;
  }

  return oneBehind;
}

// Time: O(n), Space: O(1)
