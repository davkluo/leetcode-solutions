'use strict';

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const maxLength = a.length >= b.length ? a.length : b.length;
  const paddedA = a.padStart(maxLength, '0');
  const paddedB = b.padStart(maxLength, '0');
  let result = '';
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const [addBitResult, addBitCarry] = addBits(paddedA[i], paddedB[i], carry);
    result = addBitResult + result;
    carry = addBitCarry;
  }

  return carry === 1 ? '1' + result : result;
};

function addBits(a, b, carry) {
  a = parseInt(a);
  b = parseInt(b);

  let sum = a + b + carry;
  const result = sum % 2;
  const resultCarry = Math.floor(sum / 2);

  return [result, resultCarry];
}