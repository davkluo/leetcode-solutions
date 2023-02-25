'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  let bracketStack = [];

  for (let char of s) {
    if (char in bracketPairs) {
      bracketStack.push(char);
    } else {
      if (char !== bracketPairs[bracketStack.pop()]) return false
    }
  }

  return bracketStack.length === 0;
};