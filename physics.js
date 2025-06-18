const getAcceleration = (x) => {
  if (x.f !== undefined && x.m !== undefined) {
    return x.f / x.m;
  }
  if (x.Δv !== undefined && x.Δt !== undefined) {
    return x.Δv / x.Δt;
  }
  if (x.d !== undefined && x.t !== undefined) {
    return (2 * x.d) / (x.t * x.t);
  }
  return "impossible";
};
