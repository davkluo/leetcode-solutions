/** Given a string consisting only of parentheses, determine if each open
 *  parentheses is appropriate paired with a closing parentheses
 *
 * @param s
 * @returns
 */
function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;

  const BRACKET_PAIRS = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (let c of s) {
    if (c in BRACKET_PAIRS) {
      const isValidPair = stack.length > 0 && stack.pop() === BRACKET_PAIRS[c];
      if (!isValidPair) return false;
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
