/**
 * Given an array of distinct integers, return all possible permutations
 *
 * @param nums - Array of distinct integers
 *
 * @returns - Array of all permutations
 */

function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];

  function backtrack(permutation: number[], remaining: number) {
    if (remaining === 0) {
      permutations.push([...permutation]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (permutation.includes(nums[i])) {
        continue;
      }

      permutation.push(nums[i]);
      backtrack(permutation, remaining - 1);
      permutation.pop();
    }
  }

  backtrack([], nums.length);

  return permutations;
}
