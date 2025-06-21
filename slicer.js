const slice = (slice, start = 0, end = slice.length) => {
  if (end < 0 && slice.length + end > 0) {
    end = slice.length + end;
  } else if (end < 0 && slice.length + end < 0) {
    end = 0;
  }
  if (start < 0 && slice.length + start > 0) {
    start = slice.length + start;
  } else if (start < 0 && slice.length + start < 0) {
    start = 0;
  }
  const arr = [];
  for (let i = start; i < end; i++) {
    arr.push(slice[i]);
  }
  if (typeof slice === "string") {
    return arr.join("");
  }
  return arr;
};
