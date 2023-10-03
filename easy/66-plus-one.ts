/**
 * Given an array of digits representing a number, add one to the number and
 * return the new array of digits.
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits: number[]): number[] {
  const val = BigInt(digits.join(""));
  let result = (val + BigInt(1))
    .toString()
    .split("")
    .map((digit) => Number(digit));

  return result;
}

// Time: O(n), Space: O(n)

// Alternative solution without extra space, using input array

// function plusOne(digits: number[]): number[] {
//   let last = digits.length - 1;

//   if (digits[last] !== 9) {
//       digits[last] += 1;
//       return digits;
//   }

//   while (last >= 0 && digits[last] === 9) {
//       digits[last] = 0;
//       last--;
//   }

//   if (last >= 0) {
//       digits[last] += 1;
//   } else {
//       digits.unshift(1);
//   }

//   return digits;
// };

// Time: O(n), Space: O(1)
