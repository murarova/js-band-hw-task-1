import Vehicle from './vehicle';

class Truck extends Vehicle {
  constructor(licensePlate, typeOfGas) {
    super();
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  showAverageSpeed() {
    return `${this.averageSpeed} km`;
  }
}

export default Truck;
