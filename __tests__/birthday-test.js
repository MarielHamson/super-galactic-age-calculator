import { User } from "../src/birthday";

describe('User', () => {
  test('Should return user age in Earth days', () => {
  const user1 = new User;
  user1.getAgeInDays();
  expect(user1.ageInDays).toBe()
  });
});