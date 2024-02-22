function myMap(arr, func) {
  const newArr = [];
  for (element of arr) {
    const numDouble = func(element);
    newArr.push(numDouble);
  }
  return newArr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(myMap(numbers, (num) => num * 2));

// or with a classic function declaration:
function double(num) {
  return num * 2;
}
console.log(myMap(numbers, double));
