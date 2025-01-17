from typing import List

def rob(nums: List[int]) -> int:
    """
    Given a list of numbers representing how much a robber can steal from each
    house, return the largest sum that the robber can steal at once without
    stealing from two adjacent houses.

    e.g. rob([1, 2, 3, 1]) -> 4
    """

    two_houses_prev = 0
    one_house_prev = 0

    for num in nums:
        curr = max(two_houses_prev + num, one_house_prev)
        two_houses_prev = one_house_prev
        one_house_prev = curr

    return one_house_prev

if __name__ == "__main__":
    assert rob([1, 2, 3, 1]) == 4
    assert rob([2, 7, 9, 3, 1]) == 12

    print("Passed")