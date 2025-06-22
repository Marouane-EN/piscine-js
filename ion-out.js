const ionOut = (s) => {
  const regx = /\w*(?<=t)ion/g;
  const arr = s.match(regx) || [];
  arr.forEach((val, idx, arr) => (arr[idx] = val.replace("ion", "")));
  return arr;
};
