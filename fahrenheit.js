'use strict';

let toCelsius = (value) => (value - 32) * (5 / 9);
let toKelvin = (value) => (value + 459.67) * (5 / 9);

module.exports = {
  toCelsius,
  toKelvin,
};
