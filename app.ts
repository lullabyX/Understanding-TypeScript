let janiNa: unknown;

let str: string;

str = "Biday Prithibi"
janiNa = 'Hello World'

// str = janiNa; // can't assign unknown type variable to a known type variable without type checking
if (typeof janiNa === 'string') 
  str = janiNa
janiNa = str; // can assign known type variable to unknown type variable;

function exception(str: string): never { // a function's return type never does not have reachable end point
  throw {
    'Error Message': str
  }
}

console.log("====================================");
exception('An error has been thrown')
console.log("====================================");
