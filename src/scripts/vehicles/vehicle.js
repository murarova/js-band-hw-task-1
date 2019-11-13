class Vehicle {
  constructor(model, year, capacity) {
    this.model = model;
    this.year = year;
    this.capacity = capacity;
  }

  showCapacityInPounds() {
    const pountRate = '2,20462';
    return this.capacity * Number(pountRate);
  }
}

export default Vehicle;
