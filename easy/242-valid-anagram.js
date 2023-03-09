'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  let letterFreqs = {};

  for (let char of s) {
    letterFreqs[char] = (letterFreqs[char] || 0) + 1;
  }

  for (let char of t) {
    if (letterFreqs[char] === 0) return false;

    letterFreqs[char] -= 1;
  }

  for (let char in letterFreqs) {
    if (letterFreqs[char] !== 0) return false;
  }

  return true;
};