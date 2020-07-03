export class User {
  constructor() {
    this.ageInEarthDays;
    this.ageOnMercury;
    this.ageOnVenus;
    this.ageOnMars;
    this.ageOnJupiter;
    this.timePastExpectancy;
    this.timeToDie;
    this.planetName;
  }

  validInputChecker() {
    if (this.planetName !== "mercury" && this.planetName !== "venus" && this.planetName !== "mars" && this.planetName !== "jupiter") {
      this.planetName = "Error!";
    }
  }
  getAgeInDays(birthYear, birthMonth, birthDay) {
    let d = new Date();
    this.ageInEarthDays = (d.getFullYear() - (birthYear + 1)) * 365.26 + (birthMonth * 30.5) + birthDay;
  }

  convertEarthAgeToOtherPlanetAge() {
    if (this.planetName === "mercury") {
      this.ageOnMercury = Number.parseFloat((this.ageInEarthDays / 88).toPrecision(5));
    } else if (this.planetName === "venus") {
      this.ageOnVenus = Number.parseFloat((this.ageInEarthDays / 225).toPrecision(5));
    } else if (this.planetName === "mars") {
      this.ageOnMars = Number.parseFloat((this.ageInEarthDays / 686).toPrecision(5));
    } else if (this.planetName === "jupiter") {
      this.ageOnJupiter = Number.parseFloat((this.ageInEarthDays / 4328).toPrecision(5));
    }
  }

  calculateDoomsday() {
    if (this.planetName === "mercury") {
      this.timeToDie = 414 - this.ageOnMercury;
    } else if (this.planetName === "venus") {
      this.timeToDie = 162 - this.ageOnVenus;
    } else if (this.planetName === "mars") {
      this.timeToDie = 53 - this.ageOnMars;
    } else if (this.planetName === "jupiter") {
      this.timeToDie = 8.41 - this.ageOnJupiter;
    }

    if (this.timeToDie < 0) {
      this.timePastExpectancy = Number.parseFloat((this.timeToDie * (-1)).toPrecision(2));
    }
  }
}