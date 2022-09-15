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

    const p = new constructor("Karin Kuruma");
    const hookEl = document.getElementById(hookId)!;
    hookEl.textContent = p.name;
  };
}

@Logger
@Header("<h1>This is a header</h1>", "app")
@CarHeader('another')
class Car {
  name: string;
  constructor(t: string) {
    console.log("Initializing a car instance...");

    this.name = t;
  }

  printName() {
    console.log(`name is ${this.name}`);
  }
}

const car1 = new Car('Kuruma');
car1.printName();