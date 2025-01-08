from typing import List

def maximum_subarray(nums: List[int]) -> int:
    """
    Given an array of integers, return the maximum sum that can be achieved in a
    subarray.

    e.g. maximum_subarray([-2,1,-3,4,-1,2,1,-5,4]) -> 6
    """

    max_sum = nums[0]
    curr_sum = 0

    for num in nums:
        curr_sum += num
        max_sum = max(curr_sum, max_sum)
        curr_sum = max(0, curr_sum)

    return max_sum

if __name__ == "__main__":
    assert maximum_subarray([-2,1,-3,4,-1,2,1,-5,4]) == 6
    assert maximum_subarray([1]) == 1
    assert maximum_subarray([5,4,-1,7,8]) == 23

    print("Passed")