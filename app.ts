const person: {
  name: string;
  age: number;
  hobies: string[];
  roles: [number, string]
} = {
// const person = { // infered if specific object type is not assigned
  name: 'Rabbi',
  age: 25,
  hobies: ['Gaming', 'Reading Books'],
  roles: [2, 'author']
}

// person.roles.push('Engineer') // !!! Exception: be mindful it works !!!
// person.roles[1] = 35 !! ERROR !!
console.log('====================================');
console.log(person.roles);
console.log('====================================');