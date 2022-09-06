enum Role { ADMIN, READ_ONLY, AUTHOR}
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR} // starts with 5
// enum Role { ADMIN='admin', READ_ONLY = 5, AUTHOR = 'author'} 


const person = {
  name: 'Rabbi',
  age: 25,
  hobies: ['Gaming', 'Reading Books'],
  role: Role.ADMIN
}

if (person.role === Role.AUTHOR)
{
  console.log("the person is author");
  
  }

console.log('====================================');
console.log(person.role);
console.log('====================================');