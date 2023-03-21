'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    if (nums.length === 1) return nums[0];

    let max = nums[0];
    let currSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;

    while (startIdx < nums.length && endIdx < nums.length) {
        max = Math.max(max, currSum);
        endIdx++;

        if (currSum < 0) {
            startIdx = endIdx;
            currSum = nums[startIdx] || 0;
            continue;
        }

        currSum += nums[endIdx] || 0;
    }

    return max;
};