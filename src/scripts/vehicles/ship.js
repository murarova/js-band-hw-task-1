import Vehicle from './vehicle';

class Ship extends Vehicle {
  constructor(shipType, model, name, producedYear, capacity, averageSpeed,  countOfTeam) {
    super(model, producedYear, capacity);
    this.shipType = shipType;
    this.name = name;
    this.averageSpeed = averageSpeed;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    return `${this.averageSpeed} nm`;
  }
}

export default Ship;
