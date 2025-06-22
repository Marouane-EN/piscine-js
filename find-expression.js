const findExpression = (n) => {
  let num = 1;
  let result = "1";
  let index = 0;
  let addPremision = false;
  let copy = "";
  while (num != n) {
    if (num > n && num + 4 !== n) {
      if (addPremision) {
        index /= 2;
        num = index;
        copy = copy.slice(0, -3);
        result = copy;
      } else {
        index = num / 2;
        num = index;
        addPremision = true;
        copy = result.slice(0, -3);
        result = copy;
      }
    }
    if (num < 1) {
      result = undefined;
      break;
    }
    if ((num * 2 === n && n > 4) || num + 4 === n || addPremision) {
      result += " " + add4;
      num += 4;
      addPremision = true;
    } else {
      result += " " + mul2;
      num *= 2;
    }
  }

  return result;
};
