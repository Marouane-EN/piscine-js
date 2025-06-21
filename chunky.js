const chunk = (array, int) => {
  const arr = [];
  for (let i = 0; i < array.length; i += int) {
    arr.push(array.slice(i, i + int));
  }
  return arr;
};
