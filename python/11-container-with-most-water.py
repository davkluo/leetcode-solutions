from typing import List

def most_water(height: List[int]) -> int:
    """
    Given an array of heights representing vertical lines drawn an equal
    distance apart, returns the largest area that can be contained between two
    lines.

    e.g. most_water([1,8,6,2,5,4,8,3,7]) -> 49
    """

    l, r = 0, len(height) - 1
    max_water = 0

    while l < r:
        area = min(height[l], height[r]) * (r - l)
        max_water = max(area, max_water)

        if height[l] <= height[r]:
            l += 1
        else:
            r -= 1

    return max_water

if __name__ == "__main__":
    assert most_water([1,8,6,2,5,4,8,3,7]) == 49

    print("Passed")