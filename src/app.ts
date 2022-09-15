function Logger(constructor: Function) {
  console.log('Decorator: Logging the class');
  console.log(constructor);
  
}

function Factory(element: string, hookId: string) {
  return (_: Function) => {
    const hookEl = document.getElementById(hookId)!;
    hookEl.innerHTML = element
  }
}

@Logger
@Factory('<h1>This is a header</h1>', 'app')
class Car {
  name: string;
  constructor (t: string) {
    console.log('Initializing a car instance...');
    
    this.name = t;
  }

  printName() {
    console.log(`name is ${this.name}`);
    
  }
}

const car1 = new Car('Kuruma');
car1.printName();