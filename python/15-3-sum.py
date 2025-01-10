from typing import List

def three_sum(nums: List[int]) -> List[List[int]]:
    """
    Given a list of integers, returns a list of all unique triplets from the
    list that sum to 0.

    e.g. three_sum([-1,0,1,2,-1,-4]) -> [[-1,-1,2],[-1,0,1]]
    """

    triplets = []
    nums.sort()

    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i - 1]: # Avoid repeated triplet
            continue

        if nums[i] > 0: # No more possible triplets; can't sum to 0
            break

        l, r = i + 1, len(nums) - 1
        target = -nums[i]
        while l < r:
            if nums[l] + nums[r] == target: # Forms a triplet with i
                triplets.append([nums[i], nums[l], nums[r]])
                # Increment both l and r because if l and r summed to target
                # it is impossible for a different l and current r to do the
                # same, or vice-versa.
                l += 1
                r -= 1
            elif nums[l] + nums[r] < target:
                l += 1
            else:
                r -= 1

            # Avoid checking repeated values of l and r
            while l > i + 1 and l < len(nums) - 1 and nums[l] == nums[l - 1]:
                l += 1
            while r > i + 1 and r < len(nums) - 1 and nums[r] == nums[r + 1]:
                r -= 1

    return triplets

if __name__ == "__main__":
    assert three_sum([-1,0,1,2,-1,-4]) == [[-1,-1,2],[-1,0,1]]
    assert three_sum([0,1,1]) == []
    assert three_sum([0,0,0]) == [[0,0,0]]

    print("Passed")