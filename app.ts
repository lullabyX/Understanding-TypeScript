const person: {
  name: string;
  age: number;
} = {
// const person = { // infered if specific object type is not assigned
  name: 'Rabbi',
  age: 25,
}

const car: object = { // car is of generic object type
  manufacturer: 'Karin',
  model: 'Kuruma'
}

const house: {} = { // house is of generic obejct type
  price: 211232,
  location: 'address'
}

console.log('====================================');
console.log(person.name);
console.log(car.manufacturer); // ts throws error because car is generic object type and
                              // doesn't know property manufacturer
console.log(house.price); // throws error for above same reason

console.log('====================================');