class Vehicle {
  constructor(public color: string) {}

//  public drive(): void {
//     console.log('chugga chugga');
//   }

 protected honk(): void {
    console.log('beep')
  }
}

// const vehicle = new Vehicle('red');
// console.log(vehicle.color)
// vehicle.drive()
// vehicle.honk()

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
 private drive(): void {
    console.log('vrooom')
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk()
  }
}

const car = new Car(4,'orange');
car.startDrivingProcess();
console.log(car.color)
// car.honk();
