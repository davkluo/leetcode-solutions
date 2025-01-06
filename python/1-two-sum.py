from typing import List

def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Given an array of integers and a target sum, returns the indices of the two
    numbers that add up to the target sum. This function assumes that there is
    exactly one solution and that the same element cannot be used twice.

    e.g. two_sum([2, 7, 11, 15], 9) -> [0, 1]
    """

    nums_to_indices = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in nums_to_indices:
            return [nums_to_indices[complement], i]

        nums_to_indices[num] = i

if __name__ == "__main__":
    assert two_sum([2, 7, 11, 5], 9) == [0, 1]
    assert two_sum([3, 2, 4], 6) == [1, 2]
    assert two_sum([3, 3], 6) == [0, 1]

    print("Passed")