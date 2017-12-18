# thermo.js ![Travis CI build information](https://travis-ci.org/vnbrs/thermo.js.svg?branch=master)
🌡 Convert from/to Celsius, Fahrenheit and Kelvin degrees directly from your terminal

![Preview](https://media.giphy.com/media/l3mZbOVjL47HU6Gje/giphy.gif)

# Installation
You can easily install it from npm

```
npm install -g thermo.js
```

# Usage
Simply call `thermo` along with the value and the scale.

```
thermo <value> <scale>
```

Convert 10°C to Fahrenheit and Kelvin
```
thermo 10 -celsius
=> 10°C = 50.00°F = 283.15K
```

You can use aliases for scales.
```
thermo 85 -f
=> 85°F = 29.44°C = 302.59K
```

# Running tests
thermo.js uses Mocha as unit testing framework. Just run

```
npm test
```

to begin the tests.