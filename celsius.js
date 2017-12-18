'use strict';

let toKelvin = (value) => value + 273.15;
let toFahrenheit = (value) => (value * (9 / 5)) + 32;

module.exports = {
  toKelvin,
  toFahrenheit,
};
