function mergeObject<T extends object, U>(obj1: T, obj2: U){
  // return {...obj1, ...obj2}
  return Object.assign(obj1, obj2) // it will throw error if constrained on Object.assign first param
                                  // is not object
}

let combined = mergeObject({ firstName: "hassan", age: 30, hobbies: ['games'] }, { lastName: "rabbi" });

// console.log(combined.firstName); // throws error if no function generic is set

console.log(combined);
