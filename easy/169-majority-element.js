/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer-Moore Voting Algorithm
// function majorityElement(nums) {
//   if (nums.length === 1) return nums[0];

//   let majorityElem = nums[0];
//   let runningCount = 0;

//   for (let num of nums) {
//       if (num === majorityElem) {
//           runningCount++;
//       } else {
//           if (runningCount === 1) {
//               majorityElem = num;
//           } else {
//               runningCount--;
//           }
//       }
//   }

//   return majorityElem;
// };

// Frequency Counter Solution
function createFreqs(nums) {
  let freqs = {};

  for (let num of nums) {
    freqs[num] = (freqs[num] || 0) + 1;
  }

  return freqs;
}

function majorityElement(nums) {
  let freqs = createFreqs(nums);
  let majorityCount = 0;
  let majorityElem;

  for (let num in freqs) {
    if (freqs[num] > majorityCount) {
      majorityCount = freqs[num];
      majorityElem = num;
    }
  }

  return majorityElem;
}