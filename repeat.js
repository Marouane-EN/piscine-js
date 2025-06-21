const repeat = (str, num) => {
  let s = '';
  while (num > 0) {
    s = s + str;
    num = num - 1;
  }
  return s;
};
