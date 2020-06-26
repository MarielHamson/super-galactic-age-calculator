import { Planet } from '../src/planet-name.js';

describe('Planet', () => {
  test('Should return undefined when incorrect input is entered' , () => {
    const planet = new Planet()
    expect (planet.planetName).toBe(undefined);
  });
});