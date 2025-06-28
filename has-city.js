const hasCity = (country, array) => (city) => {
  if (array.includes(city)) {
    return city + " is a city from " + country;
  }
  return city + " is not a city from " + country;
};
