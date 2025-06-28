const map = (array, func) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(func(array[i], i, array));
  }
  return arr;
};
