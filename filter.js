const filter = (array, func) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, arr)) {
      arr.push(array[i]);
    }
  }
  return arr;
};
const reject = (array, func) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, arr)) {
      arr.push(array[i]);
    }
  }
  return arr;
};
const partition = (array, func) => {
  const arr = [];
  arr.push(filter(array, func));
  arr.push(reject(array, func));
  return arr;
};
