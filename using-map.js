const citiesOnly = (array) => array.map((element) => element.city);

const upperCasingStates = (array) =>
  array.map((element) => {
    const arr = element.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return arr.join(" ");
  });
const fahrenheitToCelsius = (array) =>
  array.map((element) => {
    const regx = /-?\d+/;

    const arr = element.match(regx);
    const cel = (Number(arr[0]) - 32) * (5 / 9);
    return String(Math.floor(cel)) + "°C";
  });

const trimTemp = (array) =>
  array.map((element) => {
    element.temperature = element.temperature.replaceAll(" ", "");
    return element;
  });

const tempForecasts = (array) =>
  array.map((element) => {
    let s = "";
    element.temperature = trimTemp([element])[0].temperature;

    const arr = fahrenheitToCelsius([element.temperature]);
    s += arr[0] + "elsius in " + element.city + ", ";
    s += upperCasingStates([element.state]);
    return s;
  });
