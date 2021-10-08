const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const carMakes: string[][] = []

// help with inference when extracting values

const car0 = carMakers[0];

const car1 = carMakers.pop();

carMakers.push(1)

// help with with map
carMakers.map((car: string): string => {
  return car;
})

//Flexible types
const imortantDates = [new Date(), '2021-12-7']

imortantDates.push('string');
imortantDates.push(1);