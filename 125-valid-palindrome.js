'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  const isAlphaNumeric = char => /^[a-z0-9]+$/gi.test(char);

  while (l < r) {
    if (!isAlphaNumeric(s[l])) {
      l++;
      continue;
    }

    if (!isAlphaNumeric(s[r])) {
      r--;
      continue;
    }

    if (s[l].toUpperCase() !== s[r].toUpperCase()) return false;

    l++;
    r--;
  }

  return true;
};