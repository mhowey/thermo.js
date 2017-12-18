'use strict';

const helper = require('./helper');

let toCelsius = (value) => helper.fixFloat(value - 273.15);
let toFahrenheit = (value) => helper.fixFloat(1.8 * toCelsius(value) + 32);

module.exports = {
  toCelsius,
  toFahrenheit,
};
