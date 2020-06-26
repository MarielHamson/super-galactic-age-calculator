import { Planet } from "../src/planet-years";
const mercury = new Planet ("mercury")

export class User {
  constructor (ageOnEarth, ageOnMercury) {
  this.ageInDays = ageOnEarth;
  this.ageOnMercury = ageOnMercury
  } 

  getAgeInDays (birthYear, birthMonth, birthDay) {
    let d = new Date();
    this.ageInDays = (d.getFullYear() - (birthYear+1)) * 365.26 + (birthMonth*30.5) + birthDay
  }

  convertEarthAgeToOtherPlanetAge() {
         
      // this.ageOnMercury = this.ageInDays / mercury.days
    }
  }

// know how many years old i am on earth
// know how many days in a mercury year
// find years old on mercury