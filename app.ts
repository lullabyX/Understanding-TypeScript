function combine(input1: string | number, input2: string | number) {
  let result: string | number;

  // result = input1 + input2 // will throw error because TS knows inputs are union type
                          // but doesn't know what exact type it is and if it can be
                          // added together
  if (typeof input1 === 'number' && typeof input2 === 'number')
  {
    result = input1 + input2;
  } else
  {
    result = input1.toString() + input2.toString();
  }
  
  return result
}

const ageCombine = combine(20, 30);
const nameCombine = combine('Hassan', 'Rabbi')

console.log('====================================');
console.log(ageCombine);
console.log(nameCombine);
console.log('====================================');