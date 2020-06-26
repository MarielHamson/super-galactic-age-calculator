import { User } from "../src/birthday";
import { Planet } from "../src/planet-years";

describe('User', () => {
  test('Should return user age in Earth days', () => {
  const user1 = new User;
  user1.getAgeInDays(1987, 8, 13);
  expect(user1.ageInDays).toBe(11945.32)
  });

  test('Should convert users age in days on Earth to users age on other planet in days', () => {
    const user1 = new User;
    const planet = new Planet ("jupiter");
    // mercury.getDays();  
    user1.getAgeInDays(1987, 8, 13);
    user1.convertEarthAgeToOtherPlanetAge();
    expect(user1.ageOnJupiter).toBe(2.76)

  });

  test ('Should determine how many years away from life expectancy fulfillment', () => {
    const user1 = new User(12000, 136);
    const planet = new Planet ("jupiter");
    user1.getAgeInDays(1987, 8, 13);
    user1.convertEarthAgeToOtherPlanetAge();
    user1.calculateDoomsday();
    expect(user1.timeToDie).toBe(5.65)
  })

  test ('Should determine how many years past life expectancy lived', () => {
    const user1 = new User();
    const planet = new Planet ("jupiter");
    user1.getAgeInDays(1900, 8, 13);
    user1.convertEarthAgeToOtherPlanetAge();
    user1.calculateDoomsday();
    expect(user1.timePastExpectancy).toBe(1.7)
  });
});