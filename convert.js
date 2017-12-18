'use strict';

let fixFloat = (value) => parseFloat(value).toFixed(2);

let fromCelsius = (value) => {
  const conversion = require('./celsius');
  let kelvin = fixFloat(conversion.toKelvin(value));
  let fahrenheit = fixFloat(conversion.toFahrenheit(value));
  return `${value}°C = ${fahrenheit}°F = ${kelvin}K`;
};

let fromFahrenheit = (value) => {
  const conversion = require('./fahrenheit');
  let celsius = fixFloat(conversion.toCelsius(value));
  let kelvin = fixFloat(conversion.toKelvin(value));
  return `${value}°F = ${celsius}°C = ${kelvin}K`;
};

let fromKelvin = (value) => {
  const conversion = require('./kelvin');
  let celsius = fixFloat(conversion.toCelsius(value));
  let fahrenheit = fixFloat(conversion.toFahrenheit(value));
  return `${value}K = ${celsius}°C = ${fahrenheit}°F`;
};

module.exports = {
  fromCelsius,
  fromFahrenheit,
  fromKelvin,
};
