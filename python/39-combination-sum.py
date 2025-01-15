from typing import List

def combination_sum(candidates: List[int], target: int) -> List[List[int]]:
    """
    Given a list of candidate integers and a target, returns a list containing
    all distinct combinations of candidates that sum to the target.

    e.g. combination_sum([2, 3, 6, 7], 7) -> [[2, 2, 3], [7]]
    """

    combinations = []

    # i is start index in candidates to consider
    # curr is current combination of candidates
    def dfs(i: int, curr: List[int], remainder: int):
        # found valid combination
        if remainder == 0:
            combinations.append(curr.copy())
            return

        # overshot target or no more candidates to consider
        if i >= len(candidates) or remainder < 0:
            return

        # fully explore down tree that includes this value
        curr.append(candidates[i])
        dfs(i, curr, remainder - candidates[i])
        curr.pop()

        # explore down next tree that doesn't include this value
        dfs(i + 1, curr, remainder)

    dfs(0, [], target)
    return combinations

if __name__ == "__main__":
    assert combination_sum([2, 3, 6, 7], 7) == [[2, 2, 3], [7]]
    assert combination_sum([2, 3, 5], 8) == [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
    assert combination_sum([2], 1) == []

    print("Passed")