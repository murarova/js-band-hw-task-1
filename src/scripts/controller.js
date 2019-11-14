import LOCALSTORAGE from './services/localstorage';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.getItemsFromLS();
    this.view.initVehicles(this.model.vehicles);
    this.view.initCosts(this.model.costs);

    this.view.on('addVehicles', this.addVehicle.bind(this));
    this.view.on('addCost', this.addCost.bind(this));
  }

  addVehicle(vehicle) {
    this.model.addVehicle(vehicle);
    LOCALSTORAGE.set('vehicles', this.model.vehicles);
    this.view.renderVehicle(vehicle);
  }

  addCost(cost) {
    this.model.addCost(cost);
    LOCALSTORAGE.set('costs', this.model.costs);
    this.view.renderCost(cost);
  }
}
