'use strict';

let fromCelsius = (value) => {
  const conversion = require('./celsius');
  const kelvin = conversion.toKelvin(value);
  const fahrenheit = conversion.toFahrenheit(value);
  return `${value}°C = ${fahrenheit}°F = ${kelvin}K`;
};

let fromFahrenheit = (value) => {
  const conversion = require('./fahrenheit');
  const celsius = conversion.toCelsius(value);
  const kelvin = conversion.toKelvin(value);
  return `${value}°F = ${celsius}°C = ${kelvin}K`;
};

let fromKelvin = (value) => {
  const conversion = require('./kelvin');
  const celsius = conversion.toCelsius(value);
  const fahrenheit = conversion.toFahrenheit(value);
  return `${value}K = ${celsius}°C = ${fahrenheit}°F`;
};

module.exports = {
  fromCelsius,
  fromFahrenheit,
  fromKelvin,
};
