export class User {
  constructor (age) {
  this.ageInDays = age;
  } 

  getAgeInDays (birthday) {
  this.ageInDays = Math.floor((new Date() - new Date(1987, 8, 5)) / (86400000));
  }
}