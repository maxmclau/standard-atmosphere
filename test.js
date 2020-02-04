const test = require('ava')
const standardAtmosphere = require('.')

test('zero', t => {
  const zero = standardAtmosphere(0)

  t.is(zero.density.toFixed(6), (1.2250058148851999).toFixed(6))
  t.is(zero.viscosity.toFixed(6), (0.000017893720185530342).toFixed(6))
  t.is(zero.pressure.toFixed(6), (101327.2683744314).toFixed(6))
  t.is(zero.ssound.toFixed(6), (340.29794005764234).toFixed(6))
  t.is(zero.temperature, 288.15)
})

test('si', t => {
  const five = standardAtmosphere(5000, {si: false})

  t.is(five.density.toFixed(6), (0.0020480958257755003).toFixed(6))
  t.is(five.pressure.toFixed(6), (1760.7965190535078).toFixed(6))
  t.is(five.ssound.toFixed(6), (1097.091019912311).toFixed(6))
  t.is(five.temperature.toFixed(6), (500.83918084184756).toFixed(6))
})