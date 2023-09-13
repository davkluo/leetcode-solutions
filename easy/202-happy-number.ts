/**
 * Given a number, returns the sum of the squares of its digits
 *
 * @param {number} n
 * @returns {number}
 */
function sumSquareOfDigits(n: number): number {
  let sum = 0;

  while (n !== 0) {
    const digit = n % 10;
    sum += digit ** 2;
    n = Math.floor(n / 10);
  }

  return sum;
}

/**
 * Given a number, determine if it is a happy number. A happy number is one
 * where if you repeatedly sum the squares of its digits, you will eventually
 * arrive at the number 1. If the number cycles endlessly without reaching 1,
 * it is not a happy number.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isHappy(n: number): boolean {
  let seen = new Set<number>();

  let curr = n;

  while (!seen.has(curr) && curr !== 1) {
    seen.add(curr);
    curr = sumSquareOfDigits(curr);
  }

  return curr === 1 ? true : false;
}

/*
  Time: O(log n) because each call to sumSquareOfDigits is logarithmic time
  (number of digits grows logarithmically compared to number value) and isHappy
  actually has an upper bound on the number of checks performed before the
  pattern is cyclical or we reach the number 1. This means that we can argue
  the while loop in isHappy runs a constant number of times, even if this
  constant is not a small value. Consider that for a 32 bit number, the largest
  sumSquareOfDigits would come from the value 1,999,999,999. Even this large a
  number would only need 724 iterations, meaning every other number requires
  between 1-724 iterations. For large input size n, this is effectively constant.

  Space: O(1) for a similar argument to above. While the hash set is storing
  values, the quantity of which depends on the input, it does not necessary grow
  with the input, and for larger input sizes it quickly becomes effectively
  constant.
*/

/**
 * Two-pointer alternative using Floyd's cycle finding algorithm
 */
// function isHappy(n: number): boolean {
//   let slow = n;
//   let fast = n;

//   while (slow !== 1 && fast !== 1) {
//       slow = sumSquareOfDigits(slow);
//       fast = sumSquareOfDigits(sumSquareOfDigits(fast));

//       if (slow === fast) return slow === 1;
//   }

//   return true;
// };

/*
  Time: O(log n) as with the above solution. Even though we are nesting calls
  to sumSquareOfDigits, they occur sequentially in a sense that the result of
  one call is then passed to the next. This results in a runtime of
  O(log (n1 + n2)). Keep in mind that sumSquareOfDigits tends to return
  relatively small numbers, especially compared to large inputs, and this can be
  simplified to a logarithmic time complexity. For the same reasons as above,
  the number of iterations of the while loop can be considered constant.

  Space: O(1) since we are using two pointers and not a hash set.
*/
