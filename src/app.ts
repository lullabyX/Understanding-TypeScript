function Logger(constructor: Function) {
  console.log('Decorator: Logging the class');
  console.log(constructor);
  
}

@Logger
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