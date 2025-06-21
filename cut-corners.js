const round = (n) => {
  const negative = n < 0;
  let num = 0;
  if (negative) {
    n *= -1;
  }
  while (num < n) {
    num++;
  }
  if (n == num) {
    return n;
  }
  if (n <= num - 0.5 && !negative) {
    return num - 1;
  }
  if (n > num - 0.5 && !negative) {
    return num;
  }
  if (n > num - 0.5 && negative) {
    return num * -1;
  }

  return num * -1 + 1;
};

const ceil = (n) => {
  const negative = n < 0;
  let num = 0;
  if (negative) {
    n *= -1;
  }
  while (num < n) {
    num++;
  }
  if (n == num) {
    return n;
  }
  if (!negative) {
    return num;
  }

  return num * -1 + 1;
};

const floor = (n) => {
  const negative = n < 0;
  let num = 0;

  if (negative) {
    n *= -1;
  }
  while (num < n) {
    num++;
  }
  if (n == num) {
    return n;
  }
  if (!negative) {
    return num - 1;
  }

  return num * -1;
};

const trunc = (n) => {
  n = Number(n);
  const negative = n < 0;
  let num = 0;
  const bigNumber = false;
  if (negative) {
    n *= -1;
  }
  if (n > 68719476735) {
    n = n - 68719476735;
    bigNumber = true;
  }
  while (num < n) {
    num++;
  }
  if (bigNumber) {
    num += 68719476735;
  }
  if (n == num) {
    return n;
  }
  if (!negative) {
    return num - 1;
  }

  return num * -1 + 1;
};
