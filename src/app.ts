interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no description yet';
  if (element.length === 1)
    descriptionText = `Got 1 element`
  else if (element.length)
  {
    descriptionText = `Got ${element.length} elements`
  }

  return [element, descriptionText]
}

console.log(countAndDescribe(['Hello', 'There']));
console.log(countAndDescribe('Hello there'));
// console.log(countAndDescribe({firstName: 'hassan'}));  // throws error because object doesn't have property
                                                          // length


