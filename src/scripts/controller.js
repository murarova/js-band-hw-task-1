import LOCALSTORAGE from './services/localstorage';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.getItemsFromLS();
    this.view.init(this.model.vehicles);

    this.view.on('addVehicles', this.addVehicle.bind(this));
    this.view.on('addCost', this.addCost.bind(this));
  }

  addVehicle(vehicle) {
    this.model.addVehicle(vehicle);
    LOCALSTORAGE.set('vehicles', this.model.vehicles);
    // this.showAllVehicles();
  }

  addCost(cost) {
    this.model.addCost(cost);
    LOCALSTORAGE.set('cost', this.model.costs);
    // this.showAlllCosts();
  }

  // showAllVehicles() {
  //   this.view.init(this.model.vehicles);
  // }

  // showAlllCosts() {
  //   this.view.init(this.model.costs);
  // }
}
