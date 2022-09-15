let myArray: Array<string>;

myArray = ["hello"];

myArray.push("43");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise is resolved");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(' '));
  
});
