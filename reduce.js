const fold = (array, func, accumulator = 0) => {
  for (let i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};
const foldRight = (array, func, accumulator) => {
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
};
const reduce = (array, func, initialValue) => {
  let i = 0;
  if (array.length < 1) {
    return TypeError();
  }
  if (initialValue == undefined) {
    initialValue = array[0];
    i = 1;
  }
  for (i; i < array.length; i++) {
    initialValue = func(initialValue, array[i], i, array);
  }
  return initialValue;
};

const reduceRight = (array, func, initialValue) => {
  let i = array.length - 1;
  if (array.length < 1) {
    return TypeError();
  }
  if (initialValue == undefined) {
    initialValue = array[i];
    i -= 1;
  }
  for (i; i >= 0; i--) {
    initialValue = func(initialValue, array[i], i, array);
  }
  return initialValue;
};

// const adder = (a, b) => a + b;
// fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
// foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
// console.log(reduceRight([], adder));

// returns 6 (1 + 2 + 3)
// reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)
