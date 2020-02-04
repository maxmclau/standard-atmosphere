declare namespace standardAtmosphere {
	interface AtmosphericProperties {
		temperature: number, // K (Kelvin) // Ra (Rankine)
		density: number, // kg/m^3 // slug/ft3
		pressure:  number, // N/m^2 // lbf/ft^2
		viscosity: number, // N sec/m^2 // lb sec/ft^2
		ssound: number // m/sec // ft/sec
	}

	interface Options {
		/**
		Output properties of atmosphere in SI (metric) units. 
		@default true
		*/
		readonly si?: boolean
	}
}

/**
@param altitude - Altitude to return properties of
@example
```
import normalizeUrl = require('normalize-url');
standardAtmosphere(30000)
//=> {
	temperature: 226.64962024973363,  // K (Kelvin)
	density: 0.018012827594042123, // kg/m^3
	pressure: 1171.9514784825592, // N/m^2
	viscosity: 0.0000147602655462344, // N sec/m^2
	ssound: 301.80574748785267 // m/sec
}
```
*/

declare function standardAtmosphere(
		altitude: number,
		options?: standardAtmosphere.Options
	): standardAtmosphere.AtmosphericProperties

export = standardAtmosphere