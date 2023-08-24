/** Given an array of numbers and a target sum, return the indices of the two
 *  elements that sum up to the target
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
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
