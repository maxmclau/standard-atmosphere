const test = require('ava')
const standardAtmosphere = require('.')

test('zero', t => {
  const zero = standardAtmosphere(0, true)

  t.is(zero.density, 1.2250058148851999)
  t.is(zero.viscosity, 0.000017893720185530342)
  t.is(zero.pressure, 101327.2683744314)
  t.is(zero.ssound, 340.29794005764234)
  t.is(zero.temperature, 288.15)
})

test('si', t => {
  const five = standardAtmosphere(5000, false)

  t.is(five.density, 0.0020480958257755003)
  t.is(five.pressure, 1760.7965190535078)
  t.is(five.ssound, 1097.091019912311)
  t.is(five.temperature, 500.83918084184756)
})