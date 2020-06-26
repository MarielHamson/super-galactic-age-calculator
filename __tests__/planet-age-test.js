import { Planet } from '../src/planet-years.js';

describe('Planet', () => {
  test('Should return undefined when incorrect input is entered' , () => {
    const mercury = new Planet()
    expect (mercury.days).toBe(undefined);
  });
});