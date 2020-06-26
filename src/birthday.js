export class User {
  constructor (age) {
  this.ageInDays = age;
  } 

  getAgeInDays (yearsOld, birthMonth, birthDay) {
  this.ageInDays = yearsOld * 365 + (birthMonth*30.5) + birthDay
  }
}