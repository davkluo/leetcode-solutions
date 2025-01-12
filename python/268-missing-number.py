from typing import List

def missing_number(nums: List[int]) -> int:
    """
    Given a list of n distinct numbers in the range [0, n], returns the number
    that is missing from the list.

    e.g. missing_number([3, 0, 1]) -> 2
    """

    missing = 0

    for i in range(len(nums) + 1):
        missing ^= i

    for num in nums:
        missing ^= num

    return missing

if __name__ == "__main__":
    assert missing_number([3, 0, 1]) == 2
    assert missing_number([0, 1]) == 2
    assert missing_number([9,6,4,2,3,5,7,0,1]) == 8

    print("Passed")