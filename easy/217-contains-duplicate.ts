/** Given an integer array return if any value appears twice, false otherwise
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;

    seen.add(num);
  }

  return false;
}

// Time: O(n), Space: O(n)
