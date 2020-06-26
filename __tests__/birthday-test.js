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
    const mercury = new Planet ("mercury");
    mercury.getDays();  
    user1.getAgeInDays(1987, 8, 13);
    user1.convertEarthAgeToOtherPlanetAge();
    expect(user1.ageOnMercury).toBe(135.74)
  });

  test ('Should determine how many years away from life expectancy fulfillment', () => {
    const user1 = new User(12000, 136);
    const mercury = new Planet ("mercury");
    user1.getAgeInDays(1987, 8, 13);
    user1.convertEarthAgeToOtherPlanetAge();
    console.log
    user1.calculateDoomsday();
    expect(user1.timeToDie).toBe(278.26)
  })
});