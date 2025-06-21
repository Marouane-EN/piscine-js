const indexOf = (arr, element, option = 0) => {
  if (option < 0) {
    option = arr.length + option;
  }

  for (let i = option; i < arr.length; i++) {
    if (arr[i] === undefined) {
      continue;
    }
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

const lastIndexOf = (arr, element, option = arr.length - 1) => {
  if (option < 0) {
    option = arr.length + option;
  }

  for (let i = option; i >= 0; i--) {
    if (arr[i] === undefined) {
      continue;
    }
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

const includes = (arr, element, option = 0) => {
  if (option < 0 && arr.length + option > 0) {
    option = arr.length + option;
  } else if (option < 0 && arr.length + option < 0) {
    option = 0;
  }

  for (let i = option; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) {
      return true;
    }
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};
