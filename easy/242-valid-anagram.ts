/** Determine if two strings are anagrams of each other
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sFreqs = {};
  const tFreqs = {};

  for (let c of s) {
    sFreqs[c] = (sFreqs[c] ?? 0) + 1;
  }

  for (let c of t) {
    tFreqs[c] = (tFreqs[c] ?? 0) + 1;
  }

  for (let letter in sFreqs) {
    if (!(letter in tFreqs) || sFreqs[letter] !== tFreqs[letter]) {
      return false;
    }
  }

  return true;
}

// Time: O(n), Space: O(n), given s.length === t.length === n
