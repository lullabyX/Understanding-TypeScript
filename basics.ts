function add(n1: number, n2: number, printResult: boolean, prefix: string)
{
  const result = n1 + n2;
  if (printResult)
  {
    console.log('====================================');
    console.log(prefix + result);
    console.log('====================================');
  } else 
    return result
}

let number1 = 3 // type inference, ts infers number1 is type of 'number'
const number2 = 4.5 // type inference, ts infers number2 is type of 4.5, since number2 is constant and can't change
const printResult = true
let aValue: number // type assignment
aValue = 10

add(number1, number2, printResult, 'Result is: ');