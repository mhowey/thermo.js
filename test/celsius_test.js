const assert = require('assert');
const celsius = require('../celsius');

describe('Celsius', function() {
  describe("#toKelvin", function() {
    it("should return 273.15K when 0°C is passed", function() {
      assert.equal(celsius.toKelvin(0), 273.15);
    });
  });

  describe("#toFahrenheit", function() {
    it("should return 50°F when 10°C is passed", function() {
      assert.equal(celsius.toFahrenheit(10), 50)
    });
  });
});