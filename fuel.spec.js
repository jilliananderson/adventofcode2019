// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.

const {fuelByMass, addFuelReqs} = require('./fuel');

describe('fuel requirement tests', () => {
  it('returns correct values', () => {
    expect(fuelByMass(12)).toEqual(2);
    expect(fuelByMass(14)).toEqual(2);
    expect(fuelByMass(1969)).toEqual(654);
    expect(fuelByMass(100756)).toEqual(33583);
  });

  it('adds values', () => {
    const testArr = [12, 14, 1969, 100756];
    expect(addFuelReqs(testArr)).toEqual(34241);
  })
});