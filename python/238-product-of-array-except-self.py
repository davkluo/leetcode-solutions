from typing import List

def product_except_self(nums: List[int]) -> List[int]:
    """
    Given an array of integers, return an array where each index is the product
    of the given array except for the value at the index.

    e.g. product_except_self([1, 2, 3, 4]) -> [24, 12, 8, 6]
    """

    products = [None for _ in nums]

    prefix_product = 1
    for i, num in enumerate(nums):
        products[i] = prefix_product
        prefix_product *= num

    postfix_product = 1
    for i in range(len(nums) - 1, -1, -1):
        products[i] *= postfix_product
        postfix_product *= nums[i]

    return products

if __name__ == "__main__":
    assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
    assert product_except_self([-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]

    print("Passed")