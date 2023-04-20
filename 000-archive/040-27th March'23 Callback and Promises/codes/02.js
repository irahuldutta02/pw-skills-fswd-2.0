function createPromise() {
  return new Promise(function exec(resolve, reject) {
    // your code goes here
    setTimeout(function f() {
      console.log("timer done");
      //   resolve("Done");
      reject("Done");
    }, 3000);
  });
}

console.log("start");
let x = createPromise();
console.log("got a new promise");

x.then(function f() {
  console.log("Promise ", value);
})
  .catch(function g(value) {
    console.log("Handled ", value);
  })
  .finally(function fn() {
    console.log("Finally print this");
  });

console.log("end");
