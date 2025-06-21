const RNAmap = new Map([
  ["A", "U"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"],
]);
const DNAmap = new Map([
  ["A", "T"],
  ["U", "A"],
  ["C", "G"],
  ["G", "C"],
]);

const RNA = (s) => {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (RNAmap.has(s[i])) {
      str += RNAmap.get(s[i]);
    } else {
      str += s[i];
    }
  }
  return str;
};
const DNA = (s) => {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (DNAmap.has(s[i])) {
      str += DNAmap.get(s[i]);
    } else {
      str += s[i];
    }
  }
  return str;
};
