const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => [...set];
const setToStr = (set) => Array.from(set).join("");
const strToArr = (str) => {
  const element = [];
  for (let index = 0; index < str.length; index++) {
    element.push(str[index]);
  }
  return element;
};
const strToSet = (str) => {
  const element = new Set();
  for (let index = 0; index < str.length; index++) {
    element.add(str[index]);
  }
  return element;
};

const mapToObj = (map) => Object.fromEntries(map);

const objToArr = (obj) => {
  const arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push(value);
  }
  return arr;
};
const objToMap = (obj) => new Map(Object.entries(obj));

const arrToObj = (arr) => Object.assign({}, arr);

const strToObj = (str) => (obj = { ...strToArr(str) });

const superTypeOf = (type) => {
  if (type instanceof Map) {
    return "Map";
  }
  if (type instanceof Set) {
    return "Set";
  }
  if (type === null) {
    return "null";
  }
  return typeof type;
};
