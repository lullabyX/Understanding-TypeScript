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

const number1 = 3
const number2 = 4.5
const printResult = true

add(number1, number2, printResult, 'Result is: ');