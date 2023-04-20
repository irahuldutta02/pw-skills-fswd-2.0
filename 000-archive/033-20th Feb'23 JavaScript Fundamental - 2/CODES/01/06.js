let squre = (x) => x ** 2; // one papameter single return
console.log(squre(5));

let sumOfTwoNumbers = (x, y) => x + y; // two parameter single return
console.log(sumOfTwoNumbers(5,10));

let sum = (x, y) => { // multiple paramiter multiple statements
  console.log(`Adding ${x} and ${y}`);
  return x + y;
};
console.log(sum(10, 20));

let sumAndDiff = (x, y) => ({ sum: x + y, difference: x - y }); // returning object
console.log(sumAndDiff(20,30));