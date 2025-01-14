from typing import List

def length_of_LIS(nums: List[int]) -> int:
    """
    Given a list of integers, return the length of the longest strictly
    increasing subsequence.

    e.g. length_of_LIS([10,9,2,5,3,7,101,18]) -> 4
    """

    # Store length of LIS ending at each index
    lengths = [1] # note base case of 1 since len(nums) >= 1

    for i in range(1, len(nums)):
        max_length_at_i = 1 # base case of 1 length

        for j in range(0, i):
            max_length_from_j = (lengths[j] + 1) if nums[j] < nums[i] else 0
            max_length_at_i = max(max_length_from_j, max_length_at_i)

        lengths.append(max_length_at_i)

    return max(lengths)

if __name__ == "__main__":
    assert length_of_LIS([10,9,2,5,3,7,101,18]) == 4
    assert length_of_LIS([0,1,0,3,2,3]) == 4
    assert length_of_LIS([7,7,7,7,7,7,7]) == 1

    print("Passed")
