const sign = (num) => (num > 0 ? 1 : num < 0 ? -1 : 0);

const sameSign = (num1, num2) =>
  num1 === 0 || num2 === 0 ? num1 === num2 : num1 * num2 > 0 ? true : false;