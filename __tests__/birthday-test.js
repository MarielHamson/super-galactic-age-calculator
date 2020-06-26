import { User } from "../src/birthday";
import { Planet } from "../src/planet-years";

describe('User', () => {
  test('Should return user age in Earth days', () => {
  const user1 = new User;
  user1.getAgeInDays(1987, 8, 13);
  expect(user1.ageInDays).toBe(11945.32)
  });

  test('Should convert earth age in days to other planet age in days', () => {
    const user1 = new User;
    const mercury = new Planet;
    mercury.getDays();
    expect(user1.convertToOtherPlanetDays("mercury")).toBe(" ")
  });
});