class Vehicle {
  constructor(model, producedYear, capacity) {
    this.model = model;
    this.producedYear = producedYear;
    this.capacity = capacity;
  }

  showCapacityInPounds() {
    const pountRate = 2.20462;
    return this.capacity * pountRate;
  }
}

export default Vehicle;
