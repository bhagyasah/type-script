class ArrayOfNumbers {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]){}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnyThing<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnyThing(['a','b', 'c']);

function printStrings(arr: string[]): void {
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}


function printNumbers(arr: number[]): void {
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnyThing<T>(arr: T[]) {
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

printAnyThing<string>(['a','b','c'])

printAnyThing(['a','b','c'])

// Generic Constraints
class Car {
  print() {
    console.log('i am a car')
  }
}

class House {
  print(){
    console.log('i am house')
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for(let i=0; i<arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars<House>([new House(), new House()])

printHouseOrCars<Car>([new Car(), new Car()])
