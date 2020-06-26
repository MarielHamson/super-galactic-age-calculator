import { User } from "../src/birthday";

describe('User', () => {
  test('Should return user age in Earth days', () => {
  const userAge = new User(2700);
  expect(userAge.ageInDays).toBe(2700)
  });
});