import { Planet } from '../src/planet-age.js';

describe('Planet', () => {
  test('Should return undefined when incorrect input is entered' , () => {
    const mercury = new Planet
    expect (mercury.days).toBe(undefined);
  });

  test('Should return planet days property', () => {
    const mercury = new Planet("mercury")
    mercury.getDays();
    expect(mercury.days).toBe(88);
  });
  
  test('should convert planet days to Earth years', () => {
    const mercury = new Planet("mercury")
    mercury.getDays();
    mercury.convertToEarthYears();
    expect(mercury.earthYears).toBe(.24)
  });
});