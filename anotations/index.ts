let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number } = {
  x: 2,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// Whenn to use annotations
//1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number } =  JSON.parse(json);
console.log(coordinates)

//2) when we declare variable on one line and initialize it later
let words = ['red', 'gree', 'blue'];

let foundWord: boolean;

for (let i =0; i<words.length; i++) {
if (words[i] = 'green') {
  foundWord = true
}
}

//3) Variable whose type connot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i]
}
