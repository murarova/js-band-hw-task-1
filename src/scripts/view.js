/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import EventEmitter from './services/event-emitter';

const defaultShip = {
  model: '',
  name: '',
  producedYear: '',
  capacity: '',
  averageSpeed: '',
  countOfTeam: '',
};

const defaultTruck = {
  model: '',
  licensePlate: '',
  producedYear: '',
  capacity: '',
  averageSpeed: '',
  typeOfGas: '',
};

const defaultCost = {
  model: '',
  costByKgInput: '',
  costByKmInput: '',
};

export default class View extends EventEmitter {
  constructor() {
    super();

    this.ship = {};

    this.truck = {};

    this.cost = {};

    // QUERY SELECTORS

    this.container = document.querySelector('.container');
    this.list = document.querySelector('.list');

    // EVENT LISTENERS

    this.container.addEventListener('submit', this.handleAdd.bind(this));
  }

  handleAdd(e) {
    e.preventDefault();

    const form = e.target;

    const model = form.querySelector('.model-input');
    const name = form.querySelector('.name-input');
    const producedYear = form.querySelector('.date-input');
    const capacity = form.querySelector('.capacity-input');
    const averageSpeed = form.querySelector('.averageSpeed-input');
    const countOfTeam = form.querySelector('.team-input');
    const licensePlate = form.querySelector('.license-plate-input');
    const typeOfGas = form.querySelector('.type-of-gas-input');
    const costByKgInput = form.querySelector('.cost-by-kg-input');
    const costByKmInput = form.querySelector('.cost-by-km-input');

    if (e.target.className === 'ship-form') {
      this.ship = {
        model: model.value,
        name: name.value,
        producedYear: producedYear.value,
        capacity: capacity.value,
        averageSpeed: averageSpeed.value,
        countOfTeam: countOfTeam.value,
      };

      this.emit('addVehicles', this.ship);
      form.reset();
      this.ship = defaultShip;
    }

    if (e.target.className === 'truck-form') {
      this.truck = {
        model: model.value,
        producedYear: producedYear.value,
        capacity: capacity.value,
        averageSpeed: averageSpeed.value,
        licensePlate: licensePlate.value,
        typeOfGas: typeOfGas.value,
      };

      this.emit('addVehicles', this.truck);
      form.reset();
      this.truck = defaultTruck;
    }

    if (e.target.className === 'cost-form') {
      this.cost = {
        model: model.value,
        costByKgInput: costByKgInput.value,
        costByKmInput: costByKmInput.value,
      };

      this.emit('addCost', this.cost);
      form.reset();
      this.cost = defaultCost;
    }
  }

  //   initVehicles(vehicles) {
  //     this.list.innerHTML = '';

  //     let rows = '';

  //     vehicles.reducer(item => {
  //       rows += `<tr className="row">
  //         <td>${item.model}</td>
  //         <td>${item.name}</td>
  //         <td>${item.producedYear}</td>
  //       </tr>`;
  //     });

  //     console.log(rows);

  //     // const table = `<table className="transactionHistory">
  //     //     <thead>
  //     //       <tr className="head">
  //     //         <th>Type</th>
  //     //         <th>Amount</th>
  //     //         <th>Currency</th>
  //     //       </tr>
  //     //     </thead>

  //     //     <tbody className="body">

  //     //     </tbody>
  //     //   </table>`;
  //     this.list.append(...elements);
  //   }
}
