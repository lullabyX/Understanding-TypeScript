type admin = {
  name: string;
  privileges: string[];
};

type employee = {
  name: string;
  startDate: Date;
};

type elevateEmployee = admin & employee;

const e1: elevateEmployee = {
  name: "Hassan",
  privileges: ["create-server", "manage-server"],
  startDate: new Date(),
};

console.log("====================================");
console.log(e1);
console.log("====================================");

type Combinable = string | number;
type isThere = boolean | number;

type universal = Combinable & isThere;

// type guard

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log('====================================');
console.log(add('Hello ', 'There!'));
console.log(add(5, 6));
console.log('====================================');

const showEmployeeDetail = (employee: admin | employee) => {
  console.log("Name: " + employee.name)
  if ("privileges" in employee) {
    console.log("Priviledges: " + employee.privileges);
  }
  if ('startDate' in employee)
  {
    console.log("Start Date: " + employee.startDate);
  }
}

showEmployeeDetail(e1);
const e2: employee = {
  name: 'Rabbi',
  startDate: new Date()
}
showEmployeeDetail(e2)

class Car {
  move() {
    console.log('drive around');
    
  }
}

class Truck {
  move() {
    console.log('driving around in truck...');
    
  }

  load(amount: number) {
    console.log('Loaded in cargo: ' + amount);
    
  }
}

type Vehicle = Car | Truck

let bumblebee: Vehicle;
bumblebee = new Car()

function callVehicle(vehicle: Vehicle) {
  vehicle.move();
  if (vehicle instanceof Truck)
  {
    vehicle.load(500);
  }
}

callVehicle(bumblebee)

// disciminated unions

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse';
  runningSpeed: number
}

type Animal = Bird | Horse;

const sparrow: Animal = {
  type: "bird",
  flyingSpeed: 12
}

function printAnimalDetail(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log('The speed of the animal is: ' speed);
  
}

printAnimalDetail(sparrow);

