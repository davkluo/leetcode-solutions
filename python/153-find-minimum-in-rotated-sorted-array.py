from typing import List

def find_min_in_rotated(nums: List[int]) -> int:
    """
    Given a sorted array of unique integers that has been rotated between 1 and
    n times (n rotations being the original array), returns the minimum value.

    e.g. find_min_in_rotated([3, 4, 5, 1, 2]) -> 1
    """

    l, r = 0, len(nums) - 1

    while l <= r:
        if nums[l] <= nums[r]: # sorted
            return nums[l]

        # rotated
        m = (l + r) // 2
        if nums[m] >= nums[l]: # left sorted portion
            l = m + 1 # m is not the minimum
        else: # right sorted portion
            r = m # m may be the minimum

if __name__ == "__main__":
    assert find_min_in_rotated([3, 4, 5, 1, 2]) == 1
    assert find_min_in_rotated([4, 5, 6, 7, 0, 1, 2]) == 0
    assert find_min_in_rotated([11, 13, 15, 17]) == 11

    print("Passed")