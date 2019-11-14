import Vehicle from './vehicle';

class Truck extends Vehicle {
  constructor(truckType, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas) {
    super(model, producedYear, capacity);
    this.truckType = truckType;
    this.averageSpeed = averageSpeed;
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  showAverageSpeed() {
    return `${this.averageSpeed} km`;
  }
}

export default Truck;
