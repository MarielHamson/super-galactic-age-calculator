export class Planet {
  constructor (planetName) {
    this.planetName = planetName;
    this.days;
    this.earthYears;
  }

  getDays() {
    if (this.planetName === "mercury") {
      this.days = 88
    }
  }

  convertToEarthYears(){
    this.earthYears = Number.parseFloat((this.days / 365).toPrecision(2))
  }
}

