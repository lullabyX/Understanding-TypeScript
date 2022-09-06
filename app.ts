const person = {
// const person = { // infered if specific object type is not assigned
  name: 'Rabbi',
  age: 25,
  hobies: ['Gaming', 'Reading Books', 32]
}

let favoriteActivities: string[];
favoriteActivities = ['Gaming']

for (const hobby in person.hobies)
{
  console.log(hobby.toUpperCase); // here typescript's type inferece detect hoppy is a type of string
                                  // and suggest string methods for auto completion
  
  }

console.log('====================================');
console.log(person.name);
console.log('====================================');