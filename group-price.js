const groupPrice = (s) => {
  const regx = /(USD|\$)(\d+)\.(\d+)/g;
  let array = [];
  const result = [];
  let match;
  while ((match = regx.exec(s)) !== null) {
    array.push(match[0], match[2], match[3]);
    result.push(array);
    array = [];
  }
  return result;
};
