// anonymous function

let x = function () {
  console.log("Hello World");
};
x();

// Immediately invoked function expression or self invocing functionc

(function abc() {
  console.log("Hello");
})();

let a = (function (x) {
  return x ** 2;
})(5);

console.log(a);
