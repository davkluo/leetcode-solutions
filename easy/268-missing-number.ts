/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * returns the only number in the range that is missing from the array.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const targetSum = (n * (n + 1)) / 2;

  let sum = nums.reduce((prev, next) => prev + next, 0);

  return targetSum - sum;
}

// Time: O(n), Space: O(1)
