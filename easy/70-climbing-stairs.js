'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let memo = {
    0: 1
  };

  for (let i = 1; i <= n; i++) {
    memo[i] = (memo[i - 1] || 0) + (memo[i - 2] || 0);
  }

  return memo[n];
};

// fibonacci sequence-like solution: (better space complexity)
// function climbStairs(n) {
//   if (n < 2) return 1;

//   let twoPrevious = 1;
//   let onePrevious = 1;
//   let current = 0;

//   for (let i = 2; i <= n; i++) {
//     current = twoPrevious + onePrevious;
//     twoPrevious = onePrevious;
//     onePrevious = current;
//   }

//   return current;
// }