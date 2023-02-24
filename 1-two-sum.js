'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numsToIndicesMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if ((target - num) in numsToIndicesMap) {
      return [numsToIndicesMap[target - num][0], i]
    }

    if (num in numsToIndicesMap) {
      numsToIndicesMap[num].push(i);
    } else {
      numsToIndicesMap[num] = [i];
    }
  }
};