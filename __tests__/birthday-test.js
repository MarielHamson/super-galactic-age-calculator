import { User } from "../src/birthday";

describe('User', () => {

  test('Should return undefined when incorrect input is entered' , () => {
    const user = new User;
    user.planetName = "Leilani"
    user.validInputChecker();
    expect (user.planetName).toBe("Error!");
  });

  test('Should return user age in Earth days', () => {
  const user = new User;
  user.planetName = "mercury"
  user.getAgeInDays(1987, 8, 13);
  expect(user.ageInEarthDays).toBe(11945.32)
  });

  test('Should convert users age in days on Earth to users age on other planet in days', () => {
    const user = new User;
    user.planetName = "mercury"
    user.getAgeInDays(1987, 8, 13);
    user.convertEarthAgeToOtherPlanetAge();
    expect(user.ageOnMercury).toBe(135.74)

  });

  test ('Should determine how many years away from life expectancy fulfillment', () => {
    const user = new User(12000, 136);
    user.planetName = "mercury"
    user.getAgeInDays(1987, 8, 13);
    user.convertEarthAgeToOtherPlanetAge();
    user.calculateDoomsday();
    expect(user.timeToDie).toBe(278.26)
  })

  test ('Should determine how many years past life expectancy lived', () => {
    const user = new User();
    user.planetName = "mercury"
    user.getAgeInDays(1900, 8, 13);
    user.convertEarthAgeToOtherPlanetAge();
    user.calculateDoomsday();
    expect(user.timePastExpectancy).toBe(83)
  });

  test('Should return user age in Earth days', () => {
    const user = new User;
    user.planetName = "venus"
    user.getAgeInDays(1987, 8, 13);
    expect(user.ageInEarthDays).toBe(11945.32)
    });
  
    test('Should convert users age in days on Earth to users age on other planet in days', () => {
      const user = new User;
      user.planetName = "venus"
      user.getAgeInDays(1987, 8, 13);
      user.convertEarthAgeToOtherPlanetAge();
      expect(user.ageOnVenus).toBe(53.09)
  
    });
  
    test ('Should determine how many years away from life expectancy fulfillment', () => {
      const user = new User(12000, 136);
      user.planetName = "venus"
      user.getAgeInDays(1987, 8, 13);
      user.convertEarthAgeToOtherPlanetAge();
      user.calculateDoomsday();
      expect(user.timeToDie).toBe(108.91)
    })
  
    test ('Should determine how many years past life expectancy lived', () => {
      const user = new User();
      user.planetName = "venus"
      user.getAgeInDays(1900, 8, 13);
      user.convertEarthAgeToOtherPlanetAge();
      user.calculateDoomsday();
      expect(user.timePastExpectancy).toBe(32)
    });

    test('Should return user age in Earth days', () => {
      const user = new User;
      user.planetName = "mars"
      user.getAgeInDays(1987, 8, 13);
      expect(user.ageInEarthDays).toBe(11945.32)
      });
    
      test('Should convert users age in days on Earth to users age on other planet in days', () => {
        const user = new User;
        user.planetName = "mars"
        user.getAgeInDays(1987, 8, 13);
        user.convertEarthAgeToOtherPlanetAge();
        expect(user.ageOnMars).toBe(17.413)
    
      });
    
      test ('Should determine how many years away from life expectancy fulfillment', () => {
        const user = new User(12000, 136);
        user.planetName = "mars"
        user.getAgeInDays(1987, 8, 13);
        user.convertEarthAgeToOtherPlanetAge();
        user.calculateDoomsday();
        expect(user.timeToDie).toBe(35.587)
      })
    
      test ('Should determine how many years past life expectancy lived', () => {
        const user = new User();
        user.planetName = "mars"
        user.getAgeInDays(1900, 8, 13);
        user.convertEarthAgeToOtherPlanetAge();
        user.calculateDoomsday();
        expect(user.timePastExpectancy).toBe(11)
      });

      test('Should return user age in Earth days', () => {
        const user = new User;
        user.planetName = "jupiter"
        user.getAgeInDays(1987, 8, 13);
        expect(user.ageInEarthDays).toBe(11945.32)
        });
      
        test('Should convert users age in days on Earth to users age on other planet in days', () => {
          const user = new User;
          user.planetName = "jupiter"
          user.getAgeInDays(1987, 8, 13);
          user.convertEarthAgeToOtherPlanetAge();
          expect(user.ageOnJupiter).toBe(2.76)
      
        });
      
        test ('Should determine how many years away from life expectancy fulfillment', () => {
          const user = new User(12000, 136);
          user.planetName = "jupiter"
          user.getAgeInDays(1987, 8, 13);
          user.convertEarthAgeToOtherPlanetAge();
          user.calculateDoomsday();
          expect(user.timeToDie).toBe(5.65)
        })
      
        test ('Should determine how many years past life expectancy lived', () => {
          const user = new User();
          user.planetName = "jupiter"
          user.getAgeInDays(1900, 8, 13);
          user.convertEarthAgeToOtherPlanetAge();
          user.calculateDoomsday();
          expect(user.timePastExpectancy).toBe(1.7)
        });
    
});