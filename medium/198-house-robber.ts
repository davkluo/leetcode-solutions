/** Given an integer array representing the amount of money at each house,
 *  returns the maximum amount of money that can be robbed if no two adjacent
 *  houses can be robbed.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const money = Math.max(rob1 + num, rob2);
    rob1 = rob2;
    rob2 = money;
  }

  return rob2;
}

// Time: O(n), Space: O(1)
