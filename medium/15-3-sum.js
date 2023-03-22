'use strict';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  // Set to store unique triplets
  let triplets = new Set();

  // Frequency counter
  let freqs = createFreqs(nums);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const target = -(nums[i] + nums[j]);
      const requiredFreq = 1 +
        (nums[i] === target ? 1 : 0) +
        (nums[j] === target ? 1 : 0);

      if (target in freqs && freqs[target] >= requiredFreq) {
        triplets.add(arrayToSortedString([nums[i], nums[j], target]));
      }
    }
  }

  let solution = Array.from(triplets);
  solution = solution.map(str => str.split(','));
  return solution;
};

function arrayToSortedString(arr) {
  arr.sort((a, b) => a - b);
  return arr.join(',');
}

function createFreqs(nums) {
  let freqs = {};

  for (let num of nums) {
    freqs[num] = (freqs[num] || 0) + 1;
  }

  return freqs;
}

// Multiple pointer solution:
// 'use strict';

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// function threeSum(nums) {
//     // Sort the array
//     nums.sort((a, b) => a - b);

//     // Array of all positive / all negative numbers can't sum to 0
//     if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

//     let triplets = [];

//     // Iterate through for the first value
//     for (let i = 0; i < nums.length; i++) {

//         // Numbers following a positive number will also be positive
//         if (nums[i] > 0) break;

//         const target = -nums[i];

//         // Multiple pointers to find a sum of zero
//         let l = i + 1;
//         let r = nums.length - 1;

//         while (l < r) {
//             const sum = nums[l] + nums[r];

//             if (sum === target) {
//                 triplets.push([nums[i], nums[l], nums[r]]);

//                 // Skip over all repeated numbers
//                 while (nums[l] === nums[l+1]) l++;
//                 while (nums[r] === nums[r-1]) r--;
//             }

//             // Progress towards target as needed
//             if (sum <= target) l++;
//             if (sum > target) r--;
//         }

//         while (nums[i] === nums[i+1]) i++;
//     }

//     return triplets;
// }