const adder = (array, initialValue = 0) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
};

const sumOrMul = (array, initialValue = 0) =>
  array.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 == 0
        ? accumulator * currentValue
        : accumulator + currentValue,
    initialValue
  );

const funcExec = (array, initialValue = 0) =>
  array.reduce(
    (accumulator, currentValue) => currentValue(accumulator),
    initialValue
  );
