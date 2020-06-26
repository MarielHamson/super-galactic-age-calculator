export class Planet {
  constructor (planetName) {
    this.planetName = planetName;
    this.days = 0;
  }

  getDays() {
    if (this.planetName === "mercury") {
      this.days = 88
    }
  }
}

