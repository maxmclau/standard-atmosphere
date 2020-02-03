# standard-atmosphere

Properties of US standard atmosphere ranging -5000 to 250000 ft altitude

## Install

```
$ npm install standard-atmosphere
```

## Usage

```js
const standardAtmosphere = require('standard-atmosphere');

standardAtmosphere(30000, true) // SI units (metric)
```

```js
{
  temperature: 226.64962024973363,  // K (Kelvin)
  density: 0.018012827594042123, // kg/m^3
  pressure: 1171.9514784825592, // N/m^2
  viscosity: 0.0000147602655462344, // N sec/m^2
  ssound: 301.80574748785267 // m/sec
}
```

## Test

```
$ npm test
```

## API

### standardAtmosphere(altitude, si?)

#### altitude

Type: `number`

#### si

Type: `boolean`

SI unit input/output?
