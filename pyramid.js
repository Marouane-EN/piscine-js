const spaceAdd = (n) => {
  if (n < 1) {
    return "";
  }
  if (n == 1) {
    return " ";
  }
  return " " + spaceAdd(n - 1);
};
const pyramid = (s, n) => {
  let space = spaceAdd((n - 1) * s.length);
  let st = s;
  let str = "";

  while (n > 1) {
    str += space + s + "\n";
    s += st + st;
    space = space.slice(0, -st.length);
    n--;
  }
  str = str + s;

  return str;
};
