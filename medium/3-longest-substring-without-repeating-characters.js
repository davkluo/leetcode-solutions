'use strict';

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;

  let seen = {};
  let maxLength = 1;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const currChar = s[end];

    if (currChar in seen) {
      start = Math.max(start, seen[currChar] + 1);
    }

    seen[currChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};