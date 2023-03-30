'use strict';

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const digitToLetters = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
  };

  let combinations = [];

  for (let digit of digits) {
      const possibleLetters = digitToLetters[digit];

      if (combinations.length === 0) {
          combinations = possibleLetters;
          continue;
      }

      let currCombinations = [];

      combinations.forEach(comb => {
          possibleLetters.forEach(letter => {
              currCombinations.push(comb + letter);
          });
      });

      combinations = currCombinations;
  }

  return combinations
};