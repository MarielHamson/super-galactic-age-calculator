import { Planet } from '../src/planet-age.js';

describe('Planet', () => {
  test('Should return " " when incorrect input is entered' , () => {
    const mercury = new Planet
    expect (mercury.days).toBe(0);
  });

  test('Should return planet name property', () => {
    const mercury = new Planet
    expect(mercury.planetName).toBe("mercury");
  });
  
});