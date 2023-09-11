/**
 * Given a non-empty array of numbers, return the one number that only appears
 * once. All other numbers appear twice.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let res = 0;
  for (let num of nums) {
    res ^= num; // XOR bitwise operation
  }

  return res;
}

// Time: O(n), Space: O(1)
