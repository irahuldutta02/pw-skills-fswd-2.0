let emptySet = new Set();

// console.log(emptySet.size);

let myArray = [1, 2, 3, 4];

let set2 = new Set([...myArray]);

// console.log(set2);

// console.log(set2.has(9));

set2.add(9);

// console.log(set2);

set2.clear();

// console.log(set2);

// set difference

function diffSets(setA, setB) {
  return new Set([...setA].filter((el) => setB.has(el)));
}

let arr1 = [2, 5, 6, 8, 9];
let arr2 = [2, 10, 50, 60, 70];

let seta = new Set([...arr1]);
let setb = new Set([...arr2]);

// console.log(diffSets(seta, setb));

// ++++++++++++++++++++++++++++++++++++++++++++
// MAP

let map1 = new Map();

console.log(map1.size);

let arr = [
    [1, "Rahul"],
    [2, "Test-2"],
    [3, "Test-3"],
    [4, "Test-4"],
]

arr.map ((ai)=> map1.set(ai[0], ai[1]));

console.log(map1);

