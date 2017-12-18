'use strict';

const helper = require('./helper');

let toKelvin = (value) => helper.fixFloat(value + 273.15);
let toFahrenheit = (value) => helper.fixFloat((value * (9 / 5)) + 32);

module.exports = {
  toKelvin,
  toFahrenheit,
};
