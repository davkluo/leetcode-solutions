function twoSum(nums: number[], target: number): number[] {
  const numToIndex: Record<string, number> = {};
  let targetIndices: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - nums[i];

    if (remainder in numToIndex) {
      targetIndices = [i, numToIndex[remainder]];
    }

    numToIndex[num] = i;
  }

  return targetIndices;
}
