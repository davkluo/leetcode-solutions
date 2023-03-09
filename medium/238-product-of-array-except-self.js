'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let length = nums.length;
  let products = Array.from({ length }).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < length; i++) {
    products[i] *= leftProduct;
    leftProduct *= nums[i];
    products[length - i - 1] *= rightProduct;
    rightProduct *= nums[length - i - 1];
  }

  return products;
}

// function productExceptSelf(nums) {
//   let leftProducts = [];
//   let rightProducts = [];

//   for (let i = 0; i < nums.length; i++) {
//     leftProducts.push(
//       leftProducts.length === 0
//         ? nums[i]
//         : leftProducts[leftProducts.length - 1] * nums[i]
//     );

//     rightProducts.push(
//       rightProducts.length === 0
//         ? nums[nums.length - i - 1]
//         : rightProducts[rightProducts.length - 1] * nums[nums.length - i - 1]
//     );
//   }

//   return Array.from({ length: nums.length })
//     .map((val, i) => {
//       const left = (i - 1 < 0) ? 1 : leftProducts[i - 1];
//       const right = (rightProducts.length - i - 2 < 0) ? 1 : rightProducts[rightProducts.length - i - 2];
//       return left * right;
//     });
// }