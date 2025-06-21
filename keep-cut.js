const cutFirst = (s) => {
  const arr = [];
  for (let i = 2; i < s.length; i++) {
    arr.push(s[i]);
  }

  return arr.join("");
};

const cutLast = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (i > s.length - 3) {
      continue;
    }
    arr.push(s[i]);
  }

  return arr.join("");
};

const cutFirstLast = (s) => {
  s = cutFirst(s);
  s = cutLast(s);

  return s;
};

const keepFirst = (s) => {
  return s.slice(0, 2);
};
const keepLast = (s) => {
  return s.slice(s.length - 2);
};

const keepFirstLast = (s) => {
  let str = "";
  if (s.length < 4) {
    return s;
  }
  str = keepLast(s);
  s = keepFirst(s);
  return s + str;
};
