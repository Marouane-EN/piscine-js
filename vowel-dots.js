const vowels = /a|e|o|i|u/gi;
const vowelDots = (s) => {
  return s.replace(vowels, (value) => value + ".");
};
