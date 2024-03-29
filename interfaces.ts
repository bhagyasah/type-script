
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }


interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} `
  }
};

// const printVehicle = (vehicle: Reportable ): void => {
//   console.log(vehicle.summary())
// }

const drink = {
  color: 'brown',
  carbonated:  true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gram of sugar`;
  }
}

const printSummary = (item: Reportable ): void => {
  console.log(item.summary())
}


printSummary(oldCivic);
printSummary(drink);