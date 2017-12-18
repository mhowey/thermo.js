'use strict';

const helper = require('./helper');

let toCelsius = (value) => helper.fixFloat((value - 32) * (5 / 9));
let toKelvin = (value) => helper.fixFloat((value + 459.67) * (5 / 9));

module.exports = {
  toCelsius,
  toKelvin,
};
