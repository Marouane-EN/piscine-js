const letterSpaceNumber = (s) => {
  const regax = /[a-zA-Z]\s\b[0-9]\b/g;

  return s.match(regax) || [];
};
