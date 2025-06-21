const triangle = (s, n) => {
  let st = s;
  let str = "";

  while (n > 1) {
    str = str + s + "\n";
    s += st;

    n--;
  }
  str = str + s;
  console.log(str);

  return str;
};
