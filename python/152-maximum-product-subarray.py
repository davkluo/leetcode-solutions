from typing import List

def maximum_product_subarray(nums: List[int]) -> int:
    """
    Given an array of integers, return the maximum product of a subarray.

    e.g. maximum_product_subarray([2,3,-2,4]) -> 6
    """

    max_product = float("-inf")
    curr_max, curr_min = 1, 1 # track min in case of negatives

    for num in nums:
        new_product_1 = curr_max * num
        new_product_2 = curr_min * num

        curr_max = max(new_product_1, new_product_2, num)
        curr_min = min(new_product_1, new_product_2, num)
        max_product = max(curr_max, max_product)

        if num == 0:
            curr_max, curr_min = 1, 1

    return max_product

if __name__ == "__main__":
    assert maximum_product_subarray([2,3,-2,4]) == 6
    assert maximum_product_subarray([-2,0,-1]) == 0

    print("Passed")