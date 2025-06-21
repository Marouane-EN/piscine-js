const repeat = (str, num) => {
  const s = str;
  while (num > 1) {
    str = s + str;
    num = num - 1;
  }
  return str;
};
