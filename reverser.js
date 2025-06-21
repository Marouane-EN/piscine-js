const reverse = (slice) => {
  const copyslice = [];
  for (let i = slice.length - 1; i >= 0; i--) {
    copyslice.push(slice[i]);
  }
  if (typeof slice == "string") {
    return copyslice.join("");
  }
  return copyslice;
};
