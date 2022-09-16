function Logger(constructor: Function) {
  console.log("Decorator: Logging the class");
  console.log(constructor);
}

function CarHeader(element: string, hookId: string) {
  console.log("CarHeader decorator factory called...");
  return function <T extends { new ( ...args: any[]): {name:string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("CarHeader logging...");
        const hookEl = document.getElementById(hookId)!;
        hookEl.innerHTML = element;
        hookEl.querySelector("h1")!.textContent = this.name;
      }
    };
  };
}

function PropertyDecorator(target: any, name: string) {
  console.log("Property Decorator...");
  console.log(target);
  console.log(name);
}

function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDecorator(target: any, name: string, position: number) {
  console.log("Parameter Decorator...");
  console.log(target);
  console.log(name);
  console.log(position);
}

@Logger
@CarHeader("<h1>This is a header</h1>", "app")
class Car {
  @PropertyDecorator // gets the constructor of the class as target
  static type = "Japanese";
  @PropertyDecorator // gets the prototype of the class as target
  name = 'Kuruma';
  private _price: number;
  constructor(t: string, p: number) {
    console.log("Initializing a car instance...");

    this.name = t;
    this._price = p;
  }

  @AccessorDecorator
  get price() {
    return this._price;
  }

  printName() {
    console.log(`name is ${this.name}`);
  }

  calculateTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const car1 = new Car( 'Karin', 10000);
car1.printName();
