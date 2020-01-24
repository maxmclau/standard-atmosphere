'use strict'

const sl = { // standard sea-level conditions
	temp: 518.67, // Ra (Rankine)
	density: 0.00237689, // slug/ft3
	pressure: 2116.22 // lbf/ft^2
}

const standardAtmosphere = (altitude, si) => {
	if (typeof altitude !== 'number') {
		throw new TypeError(`Expected a number, got \`${typeof string}\``);
	}

	altitude = (si) ? altitude*3.2808 : altitude

  let theta = 1.0
  let sigma = 1.0
  let delta = 1.0

	if (altitude < 232940) {
		theta = 1.434843 - altitude/337634
		sigma = Math.pow(0.79899 - altitude/606330, 11.20114)
		delta = Math.pow(0.838263 - altitude/577922, 12.20114)
	}
	
	if (altitude < 167323) {
		theta = 0.939268
		sigma = 0.00116533 * Math.exp((altitude - 154200)/ - 25992)
		delta = 0.00109456 * Math.exp((altitude - 154200)/ - 25992)
	}
	
	if (altitude < 154199) {
		theta = 0.482561 + altitude/337634
		sigma = Math.pow(0.857003 + altitude/190115, - 13.20114)
		delta = Math.pow(0.898309 + altitude/181373, - 12.20114)
	}
	
	if (altitude < 104987) {
		theta = 0.682457 + altitude/945374
		sigma = Math.pow(0.978261 + altitude/659515, - 35.16319)
		delta = Math.pow(0.988626 + altitude/652600, - 34.16319)
	}
	
	if (altitude < 65617) {
		theta = 0.751865
		sigma = 0.297076 * Math.exp((36089 - altitude)/20806)
		delta = 0.223361 * Math.exp((36089 - altitude)/20806)
	}
	
	if (altitude < 36089) {
		theta = 1.0 - altitude/145442
		sigma = Math.pow(1.0 - altitude/145442, 4.255876)
		delta = Math.pow(1.0 - altitude/145442, 5.255876)
	}
	
	const temp = sl.temp * theta
	const density = sl.density * sigma
	const pressure = sl.pressure * delta 

	const viscosity = 0.0226968 * Math.pow(temp, 1.5) / ((temp) + 198.72) / 1000000.0
	const ssound = Math.sqrt(1.4 * 1716.56 * (temp))

	return (si) ? {
		temperature : temp/1.8, // K (Kelvin)
		density : density/.068521/.028317, // kg/m^3
		pressure :  pressure/.020885, // N/m^2
		viscosity : viscosity/.22481/.092903, // N sec/m^2
		ssound : ssound/3.2808 // m/sec
	} : {
		temperature : temp, // Ra (Rankine)
		density : density, // slug/ft3
		pressure :  pressure, // lbf/ft^2
		viscosity : viscosity, // lb sec/ft^2
		ssound : ssound // ft/sec
	}
}

module.exports = standardAtmosphere
