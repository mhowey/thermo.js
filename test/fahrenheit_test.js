const assert = require('assert');
const fahrenheit = require('../fahrenheit');

describe('Fahrenheit', function() {
  describe("#toCelsius", function() {
    it("should return -12.22°C when 10°F is passed", function() {
      assert.equal(fahrenheit.toCelsius(10), -12.22);
    });
  });

  describe("#toKelvin", function() {
    it("should return 269.26F when 25°F is passed", function() {
      assert.equal(fahrenheit.toKelvin(25), 269.26)
    });
  });
});