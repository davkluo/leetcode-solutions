'use strict';

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const numsSet = new Set();

  for (let num of nums) {
    if (numsSet.has(num)) return true;

    numsSet.add(num);
  }

  return false;
};