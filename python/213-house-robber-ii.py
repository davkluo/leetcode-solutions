from typing import List

def rob(nums: List[int]) -> int:
    """
    Given a list of numbers representing how much a robber can steal from each
    house, return the largest sum that the robber can steal at once without
    stealing from two adjacent houses, assuming that the houses are arranged in
    a circle.

    e.g. rob([2, 3, 2]) -> 3
    """

    if len(nums) == 1:
        return nums[0]

    def _rob(nums: List[int]) -> int:
        two_houses_prev, one_house_prev = 0, 0

        for num in nums:
            curr = max(two_houses_prev + num, one_house_prev)
            two_houses_prev = one_house_prev
            one_house_prev = curr

        return one_house_prev

    return max(_rob(nums[:-1]), _rob(nums[1:]))

if __name__ == "__main__":
    assert rob([2, 3, 2]) == 3
    assert rob([1, 2, 3, 1]) == 4

    print("Passed")