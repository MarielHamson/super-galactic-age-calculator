export class User {
  constructor (age) {
  this.ageInDays = age;
  } 

  getAgeInDays (birthYear, birthMonth, birthDay) {
    let d = new Date();
    this.ageInDays = (d.getFullYear() - (birthYear+1)) * 365.26 + (birthMonth*30.5) + birthDay
  }
}