'use strict';

let fixFloat = (value) => parseFloat(value).toFixed(2);

let fromCelsius = (value) => {
  const conversion = require('./celsius');
  const kelvin = fixFloat(conversion.toKelvin(value));
  const fahrenheit = fixFloat(conversion.toFahrenheit(value));
  return `${value}°C = ${fahrenheit}°F = ${kelvin}K`;
};

let fromFahrenheit = (value) => {
  const conversion = require('./fahrenheit');
  const celsius = fixFloat(conversion.toCelsius(value));
  const kelvin = fixFloat(conversion.toKelvin(value));
  return `${value}°F = ${celsius}°C = ${kelvin}K`;
};

let fromKelvin = (value) => {
  const conversion = require('./kelvin');
  const celsius = fixFloat(conversion.toCelsius(value));
  const fahrenheit = fixFloat(conversion.toFahrenheit(value));
  return `${value}K = ${celsius}°C = ${fahrenheit}°F`;
};

module.exports = {
  fromCelsius,
  fromFahrenheit,
  fromKelvin,
};
