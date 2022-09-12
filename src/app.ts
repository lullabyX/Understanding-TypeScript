const fetchedData = {
  name: 'John',
  age: 30,
  job: {title: 'CEO', pay: 69420}
}

console.log(fetchedData.job?.title);

const userName = null;
const admin = userName ?? 'DarthVader69' // ?? is the nullish coalescing, assigns fallback default if
                                          // assignment variable is null or undefined
                                          // || ignores empty string
console.log(admin);
