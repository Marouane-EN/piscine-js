const get = (src, path) => {
  path = path.split(".");
  let s = src;
  for (let i = 0; i < path.length; i++) {
    if (s === undefined) {
      return undefined;
    }
    s = s[path[i]];
  }
  return s;
};
