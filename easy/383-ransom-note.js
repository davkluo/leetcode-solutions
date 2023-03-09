'use strict';

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const noteFreqs = createFreqs(ransomNote);
  const magazineFreqs = createFreqs(magazine);

  for (let charKey in noteFreqs) {
    if (!(charKey in magazineFreqs) || magazineFreqs[charKey] < noteFreqs[charKey]) {
      return false;
    }
  }

  return true;
};

function createFreqs(string) {
  let freqs = {};

  for (let char of string) {
    freqs[char] = (freqs[char] || 0) + 1;
  }

  return freqs;
}