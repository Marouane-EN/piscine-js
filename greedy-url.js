const getURL = (s) => {
  const regx = /(https|http):\/\/\w+\/?[^\s]*/g;
  const arr = s.match(regx) || [];
  return arr;
};
const greedyQuery = (s) => {
  const regx = /(https|http):\/\/\w+\/?[^\s]+=[^\s]+=[^\s]+=[^\s]+/g;
  const arr = s.match(regx) || [];
  return arr;
};
const notSoGreedy = (s) => {
  const regx = /https?:\/\/[^\s]+\/?[^\s]+=[^\s]+=[^\s]*/g;
  const arr = s.match(regx) || [];
  return arr.filter((s) => {
    const count = s.match(/=/g) || [];

    return count.length >= 2 && count.length <= 3;
  });
};
