const map = (array, func) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(func(array[i], i, array));
  }
  return arr;
};

const flatMap = (array, func) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(func(array[i], i, array))) {
      arr.push(...func(array[i], i, array));
    } else {
      arr.push(func(array[i], i, array));
    }
  }
  return arr;
};
