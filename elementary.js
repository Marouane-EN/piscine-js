const changeTheSign = (a) => {
  const s = String(a).replace("-", "");
  a = Number(s);
  return a;
};
const multiply = (a, b) => {
  let negative = false;
  if (a === 0 || b === 0) {
    return 0;
  }
  if (a < 0) {
    a = changeTheSign(a);
    negative = true;
  }
  if (b < 0) {
    b = changeTheSign(b);
    if (negative == true) {
      negative = false;
    } else {
      negative = true;
    }
  }

  for (let index = 1; index < b; index++) {
    a = a + b;
  }
  if (negative == true) {
    const s = "-" + String(a);
    a = Number(s);
  }
  return a;
};
const divide = (a, b) => {
  let negative = false;
  let index = 1;
  if (a < b && a >= 0) {
    return 0;
  }
  if (a < 0) {
    a = changeTheSign(a);
    negative = true;
  }
  if (b < 0) {
    b = changeTheSign(b);
    if (negative == true) {
      negative = false;
    } else {
      negative = true;
    }
  }
  let sum = b + b;
  while (sum < a) {
    sum = sum + b;
    index++;
  }
  if (negative == true) {
    const s = "-" + String(index);
    index = Number(s);
  }
  return index;
};

const modulo = (a, b) => {
  let negative = false;
  if (a < b && a > 0) {
    return a;
  }
  if (a < 0) {
    a = changeTheSign(a);
    negative = true;
  }
  if (b < 0) {
    b = changeTheSign(b);
    if (negative == true) {
      negative = false;
    } else {
      negative = true;
    }
  }
  while (a < b) {
    a = a - b;
  }
  if (negative == true) {
    const s = "-" + String(a);
    a = Number(s);
  }
  return a;
};
