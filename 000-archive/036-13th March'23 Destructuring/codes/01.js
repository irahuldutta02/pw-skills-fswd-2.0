const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.concat(arr2));
// SPREAD

const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// +++++++++++++++++++++++++++++++
//REST

function manyArgs() {
  let args = Array.from(arguments);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
}

function manyArgs2(...args) {
  console.log(typeof args);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
}

// manyArgs(1, 2, 3);
// manyArgs(1, 2, 3, 4, 5, 6, 7);

// manyArgs2(1, 2, 3);
// manyArgs2(1, 2, 3, 4, 5, 6, 7);


// +++++++++++++++++++++++++++

const names = ["rahul", "sourav"];
const newNames = ["rahul", ...names, "thor"];

console.log(newNames);

const siteName = "pwskills";
console.log([...siteName]);

function pwskills (...values){
    return values;
}

console.log(pwskills("rahul", "Thor"));


