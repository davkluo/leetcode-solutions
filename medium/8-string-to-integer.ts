function myAtoi(s: string): number {
  const MIN_VAL = -(2 ** 31);
  const MAX_VAL = 2 ** 31 - 1;
  const digits = new Set(Array.from("0123456789"));
  let numberString = "";
  let hasStarted = false;
  let sign = 1; // -1 for negative number, 1 for positive
  let i = 0;

  // skip leading whitespace
  while (i < s.length && s[i] === " ") {
    i++;
  }

  while (i < s.length) {
    const curr = s[i];

    if (hasStarted === false) {
      hasStarted = true;
      if (curr === "-" || curr === "+") {
        sign = curr === "-" ? -1 : 1;
        i++;
        continue;
      }
    }

    if (!digits.has(curr)) {
      break;
    }
    numberString += curr;
    i++;
  }

  return Math.min(MAX_VAL, Math.max(MIN_VAL, sign * +numberString));
}
