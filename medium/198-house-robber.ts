function rob(nums: number[]): number {
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const money = nums[i];
    dp[i] = Math.max(dp[i - 1], i - 2 >= 0 ? dp[i - 2] + money : money);
  }

  return dp[nums.length - 1];
}
