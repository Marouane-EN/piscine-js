function forEach(array, func, index, arr) {
  for (let i = 0; i < array.length; i++) {
    if (index != undefined && arr != undefined) {
      func(array[i], index, arr);
    } else if (index != undefined) {
      func(array[i], index);
    } else if (arr != undefined) {
      func(array[i], arr);
    } else {
      func(array[i]);
    }
  }
}
