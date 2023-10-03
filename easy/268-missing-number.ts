function missingNumber(nums: number[]): number {
  const n = nums.length;
  const targetSum = (n * (n + 1)) / 2;

  let sum = nums.reduce((prev, next) => prev + next, 0);

  return targetSum - sum;
}
