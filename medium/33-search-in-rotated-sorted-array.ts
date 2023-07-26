/**
 * Given a rotated, sorted array of numbers, return the index of the target
 * element or -1 if not found
 *
 * @param nums - Array of numbers
 * @param target - Target value
 *
 * @returns Index of target value or -1 if not found
 */

function search(nums: number[], target: number): number {
  const n = nums.length;
  let l = findStart(nums);
  let r = findStart(nums) + n - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midIndex = mid % n;
    const val = nums[midIndex];

    if (val === target) {
      return midIndex;
    }

    if (val > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}

/**
 * Given a rotated, sorted array of numbers, return the real start index
 *
 * @params nums - Array of numbers
 *
 * @returns Index of real start; where the sorted list begins
 */
function findStart(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] > nums[mid]) {
        return mid;
      }
      r = mid - 1;
    }
  }

  return -1;
}
