/**
 * Given an array of distinct integers and a target, return a list of all
 * combinations that sum up to the target. Numbers may be used more than once.
 *
 * @param candidates - Array of distinct integers
 * @param target - Target integer
 *
 * @returns - Array of arrays containing integer combinations summing to target
 */

function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  function backtrack(start: number, combination: number[], remainder: number) {
    if (remainder === 0) {
      // Push a copy to combinations since we will continue to manipulate array
      combinations.push([...combination]);
      return;
    }

    if (remainder < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(i, combination, remainder - candidates[i]);

      // Backtrack once the branches from this node are finished
      combination.pop();
    }
  }

  backtrack(0, [], target);

  return combinations;
}
