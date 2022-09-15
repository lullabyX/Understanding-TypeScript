function Logger(constructor: Function) {
  console.log('Decorator: Logging the class');
  console.log(constructor);
}

function Header(element: string, hookId: string) {
  console.log('Header decorator factory called...');
  
  return (_: Function) => {
    console.log("Header Logging...");
    
    const hookEl = document.getElementById(hookId)!;
    hookEl.innerHTML = element
  }
}

function CarHeader(hookId: string) {
  console.log("CarHeader decorator factory called...");
  return (constructor: any) => {
    console.log("CarHeader logging...");

    const p = new constructor("Karin Kuruma", 10000);
    const hookEl = document.getElementById(hookId)!;
    hookEl.textContent = p.name;
  };
}

function PropertyDecorator(target: any, name: string) {
  console.log('Property Decorator...');
  console.log(target);
  console.log(name);
  
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
  
}

function ParameterDecorator(target: any, name: string, position: number) {
  console.log('Parameter Decorator...');
  console.log(target);
  console.log(name);
  console.log(position);
}

@Logger
@Header("<h1>This is a header</h1>", "app")
@CarHeader('another')
class Car {
  @PropertyDecorator // gets the constructor of the class as target
  static type = 'Japanese'
  @PropertyDecorator // gets the prototype of the class as target
  name: string;
  private _price: number
  constructor(t: string, p: number) {
    console.log("Initializing a car instance...");

    this.name = t;
    this._price = p
  }

  @AccessorDecorator
  get price() {
    return this._price
  }

  printName() {
    console.log(`name is ${this.name}`);
  }

  calculateTax(@ParameterDecorator tax: number) {
    return this._price * (1+tax)
  }
}

const car1 = new Car('Kuruma', 10000);
car1.printName();