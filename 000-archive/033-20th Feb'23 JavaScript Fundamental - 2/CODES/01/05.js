// passing unlimited arguments in a function
function sumOfAllNumbers() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let result = sumOfAllNumbers(1, 1, 1);
console.log(result);
