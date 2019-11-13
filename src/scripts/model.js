import v4 from 'uuid/v4';
import LOCALSTORAGE from './services/localstorage';

export default class Model {
  constructor(vehicles = [], costs = []) {
    this.vehicles = vehicles;
    this.costs = costs;
  }

  getItemsFromLS() {
    this.vehicles = LOCALSTORAGE.get('vehicles') || [];
    this.costs = LOCALSTORAGE.get('costs') || [];
  }

  addVehicle(vehicle) {
    const newVehicle = {
      id: v4(),
      ...vehicle,
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  addCost(cost) {
    const newCost = {
      ...cost,
    };
    this.costs.push(newCost);
    return newCost;
  }
}
