import { User } from "../src/birthday";

describe('User', () => {
  test('Should return user age in Earth days', () => {
  const user1 = new User;
  user1.getAgeInDays(32, 8, 13);
  expect(user1.ageInDays).toBe(11937)
  });
});