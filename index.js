#!/usr/bin/env node
'use strict';

const yargs = require('yargs');
const argv = yargs
.option('celsius', {alias: 'c', default: false})
.option('fahrenheit', {alias: 'f', default: false})
.option('kelvin', {alias: 'k', default: false})
.help('h')
.argv;

const value = argv._[0];

if (!value) {
  console.log('You need to pass a value to be converted.');
} else {
  const convert = require('./convert')

  if (argv.celsius) {
    console.log(convert.fromCelsius(value));
  } else if (argv.fahrenheit) {
    console.log(convert.fromFahrenheit(value));
  } else if (argv.kelvin) {
    console.log(convert.fromKelvin(value));
  } else {
    console.log("You need to pass a valid flag.")
  }
}