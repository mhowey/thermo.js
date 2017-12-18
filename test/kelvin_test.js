const assert = require('assert');
const kelvin = require('../kelvin');

describe('Kelvin', function() {
  describe("#toCelsius", function() {
    it("should return -263.15°C when 10K is passed", function() {
      assert.equal(kelvin.toCelsius(10), -263.15);
    });
  });

  describe("#toFahrenheit", function() {
    it("should return 442.35°F when 501.12K is passed", function() {
      assert.equal(kelvin.toFahrenheit(501.12), 442.35)
    });
  });
});