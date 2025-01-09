from typing import List

def search_in_rotated(nums: List[int], target: int) -> int:
    """
    Given a sorted array of integers that has been rotated between 1 and n-1
    times, search the array for a target value and return its index. Returns -1
    otherwise.

    Note that unlike 153. Find Minimum in Rotated Sorted Array, the provided
    array is ALWAYS rotated, and never to the point where it once again equals
    the original sorted array.

    e.g. search_in_rotated([4,5,6,7,0,1,2], 0) -> 4
    """

    l, r = 0, len(nums) - 1

    while l <= r:
        m = (l + r) // 2

        if nums[m] == target:
            return m

        if nums[m] >= nums[l]: # left sorted portion
            if nums[m] > target and target >= nums[l]:
                r = m - 1
            else:
                l = m + 1
        else: # right sorted portion
            if nums[m] < target and target <= nums[r]:
                l = m + 1
            else:
                r = m - 1

    return -1

if __name__ == "__main__":
    assert search_in_rotated([4,5,6,7,0,1,2], 0) == 4
    assert search_in_rotated([4,5,6,7,0,1,2], 3) == -1
    assert search_in_rotated([1], 0) == -1

    print("Passed")