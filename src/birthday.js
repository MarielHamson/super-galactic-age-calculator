import { Planet } from "../src/planet-years";
const mercury = new Planet ("mercury");

export class User {
  constructor (ageInDays, ageOnMercury) {
  this.ageInDays = ageInDays;
  this.ageOnMercury = ageOnMercury
  } 

  getAgeInDays (birthYear, birthMonth, birthDay) {
    let d = new Date();
    this.ageInDays = (d.getFullYear() - (birthYear+1)) * 365.26 + (birthMonth*30.5) + birthDay
  }

  convertEarthAgeToOtherPlanetAge() {
    if (mercury.planetName === "mercury") {
      this.ageOnMercury = Number.parseFloat((this.ageInDays / 88).toPrecision(5))
     }
    }
  calculateDoomsday() {
    
  }
  }

// know how many years old i am on earth
// know how many days in a mercury year
// find years old on mercury