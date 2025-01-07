from typing import List

def contains_duplicate(nums: List[int]) -> bool:
    """
        Given an array of integers, returns True if there are duplicates and
        False otherwise.

        e.g. contains_duplicate([1,2,3,1]) -> True
    """

    seen = set()

    for num in nums:
        if num in seen:
            return True

        seen.add(num)

    return False

if __name__ == "__main__":
    assert contains_duplicate([1, 2, 3, 1]) == True
    assert contains_duplicate([1, 2, 3, 4]) == False
    assert contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True

    print("Passed")