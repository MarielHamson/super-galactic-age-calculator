import { Planet } from '../src/planet-age.js';

describe('Planet', () => {
  test('Should return " " when incorrect input is entered' , () => {
    const mercury = new Planet
    expect (mercury.earthAge).toBe(" ")
  });
});