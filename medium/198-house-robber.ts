// function rob(nums: number[]): number {
//   const dp = [nums[0]];

//   for (let i = 1; i < nums.length; i++) {
//     const money = nums[i];
//     dp[i] = Math.max(dp[i - 1], i - 2 >= 0 ? dp[i - 2] + money : money);
//   }

//   return dp[nums.length - 1];
// }

// Solution with O(1) space
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
