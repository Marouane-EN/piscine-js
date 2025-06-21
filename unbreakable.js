const split = (s, str) => {
  const slice = [];
  let st = "";
  let skip = 0;

  if (str === "") {
    return [...s];
  }
  for (let i = 0; i < s.length; i++) {
    if (skip > 0) {
      skip--;
      continue;
    }
    if (s.slice(i, i + str.length) === str) {
      slice.push(st);
      st = "";
      skip = str.length - 1;
    } else {
      st += s[i];
    }
  }

  slice.push(st);

  return slice;
};
const join = (array, str) => {
  let s = "";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      s = s + array[i] + str;
    } else {
      s += array[i];
    }
  }
  return s;
};
