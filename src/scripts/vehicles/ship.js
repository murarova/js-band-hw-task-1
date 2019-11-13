import Vehicle from './vehicle';

class Ship extends Vehicle {
  constructor(name, averageSpeed, countOfTeam) {
    super();
    this.name = name;
    this.averageSpeed = averageSpeed;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    return `${this.averageSpeed} nm`;
  }
}

export default Ship;
