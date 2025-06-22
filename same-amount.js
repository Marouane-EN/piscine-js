const sameAmount = (string, regx1, regx2) => {
  const reg = new RegExp(regx1, "g");
  const regd = new RegExp(regx2, "g");
  const arr1 = string.match(reg) || [];
  const arr2 = string.match(regd) || [];

  return arr1.length == arr2.length;
};
