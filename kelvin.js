'use strict';

let toCelsius = (value) => value - 273.15;
let toFahrenheit = (value) => 1.8 * toCelsius(value) + 32;

module.exports = {
  toCelsius,
  toFahrenheit,
};
