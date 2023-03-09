'use strict';

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  let freqs = createFreqs(s);
  let hasOdds = false;
  let longestPalindromeLength = 0;

  for (let key in freqs) {
    longestPalindromeLength += Math.floor(freqs[key] / 2) * 2;

    if (hasOdds === false && freqs[key] % 2 === 1) hasOdds = true;
  }

  return longestPalindromeLength + (hasOdds ? 1 : 0);
};

function createFreqs(string) {
  let freqs = {};

  for (let char of string) {
    freqs[char] = (freqs[char] || 0) + 1;
  }

  return freqs;
}