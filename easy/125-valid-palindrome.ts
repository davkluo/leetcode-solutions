/** Given a string, return true if it is a palindrome ignoring all characters
 *  that are not alphanumeric, and false otherwise.
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s: string): boolean {
  if (s.length <= 1) return true;

  /** Determines if character is alphanumeric; expects string of length 1 */
  function isAlphanumeric(c: string): boolean {
    const isNumber = c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57;
    const isLetter =
      c.toLowerCase().charCodeAt(0) >= 97 &&
      c.toLowerCase().charCodeAt(0) <= 122;

    return isNumber || isLetter;
  }

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (!isAlphanumeric(s[l])) {
      l++;
    } else if (!isAlphanumeric(s[r])) {
      r--;
    } else {
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
  }

  return true;
}

// Time: O(n), Space: O(1)
