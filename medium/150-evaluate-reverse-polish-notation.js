'use strict';

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const operands = new Set(['+', '-', '*', '/']);
  let bankedNumbers = [];

  for (let token of tokens) {
    if (operands.has(token)) {
      _operate(token);
    } else {
      bankedNumbers.push(parseInt(token));
    }
  }

  function _operate(operand) {
    const a = bankedNumbers[bankedNumbers.length - 2];
    const b = bankedNumbers[bankedNumbers.length - 1];

    let result;

    switch (operand) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = Math.trunc(a / b);
        break;

      default:
        break;
    }

    bankedNumbers.pop();
    bankedNumbers[bankedNumbers.length - 1] = result;
  }

  return bankedNumbers[0];
};