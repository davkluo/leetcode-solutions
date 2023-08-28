/** Given an integer array representing the amount of money at each house,
 *  returns the maximum amount of money that can be robbed if no two adjacent
 *  houses can be robbed. The houses are arranged in a circle.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  function _rob(startIndex: number, endIndex: number): number {
    let rob1 = 0;
    let rob2 = 0;

    for (let i = startIndex; i < endIndex; i++) {
      const money = Math.max(rob1 + nums[i], rob2);
      rob1 = rob2;
      rob2 = money;
    }

    return rob2;
  }

  return Math.max(_rob(1, nums.length), _rob(0, nums.length - 1));
}

// Time: O(n), Space: O(1)
