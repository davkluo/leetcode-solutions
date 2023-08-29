/** Given a sorted array of numbers and a target value, returns the index of the
 *  target value if it exists, otherwise -1
 *
 * @param nums
 * @param target
 */
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}

// Time: O(log n), Space: O(1)
