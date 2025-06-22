const flat = (array, n = 1) => {
  const arr = [];
  if (n < 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arr.push(...flat(array[i], n - 1));
      continue;
    }
    arr.push(array[i]);
  }

  return arr;
};
