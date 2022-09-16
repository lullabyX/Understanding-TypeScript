function Logger(constructor: Function) {
  console.log("Decorator: Logging the class");
  console.log(constructor);
}

function CarHeader(element: string, hookId: string) {
  console.log("CarHeader decorator factory called...");
  return function <T extends { new (...args: any[]): { name: string } }>(
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
  name = "Kuruma";
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

const car1 = new Car("Karin", 10000);
car1.printName();

function Autobind(
  _: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  return {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const clickMe = document.getElementById("button");

clickMe?.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [constructorName: string]: {
    [prop: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, name: string) {
  const constructorName = target.constructor.name;
  registeredValidators[constructorName] = {
    ...registeredValidators[constructorName],
    [name]: [...registeredValidators.constructorName?.name ?? [], "required"],
  };
}

function Positive(target: any, name: string) {
  const constructorName = target.constructor.name;
  registeredValidators[constructorName] = {
    ...registeredValidators[constructorName],
    [name]: [...registeredValidators.constructorName?.name ?? [], "positive"],
  };
}

function Validate(obj: any): boolean {
  let isValid = true;
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  
  if (!objValidatorConfig)
    return isValid;
  for (const prop in objValidatorConfig)
  {
    for (const validator of objValidatorConfig[prop])
    { 
      switch (validator)
      {
        case 'required':
          isValid = isValid && !!obj[prop]
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid
}

class Course {
  @Required
  name: string;
  @Positive
  price: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')

courseForm?.addEventListener('submit', event => {
  event.preventDefault();
  const courseName = document.getElementById('name') as HTMLInputElement;
  const coursePrice = document.getElementById('price') as HTMLInputElement;

  const name = courseName.value;
  const price = +coursePrice.value;

  const createdCourse = new Course(name, price);

  if (!Validate(createdCourse))
  {
    alert('Invalid Input, please try again!')
    return;
  }
  console.log(createdCourse);
  
})
