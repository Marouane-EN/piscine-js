const sameAmount = (string, regx1, regx2) => {
  const arr1 = string.match(regx1) || [];
  const arr2 = string.match(regx2) || [];
  return arr1.lenght === arr2.lenght;
};
