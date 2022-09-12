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

console.log('====================================');
console.log(e1);
console.log('====================================');

type Combinable = string | number;
type isThere = boolean | number;

type universal = Combinable & isThere
