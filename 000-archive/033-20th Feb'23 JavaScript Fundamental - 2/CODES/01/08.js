// objects in js

// way 1 normal
let obj = { id: 101, name: "Rahul", salary: 10000 };
console.log(obj);
console.log(obj.id);

console.log(obj.name);
console.log(obj["name"]); // another way of accesing key kay pair

console.log(obj.salary);

let keys = Object.keys(obj); // rReturns the names of the enumerable string properties and methods of an object.
console.log(keys);

let values = Object.values(obj); // Returns an array of values of the enumerable properties of an object
console.log(values);

let keyValue = Object.entries(obj); // Returns an array of key/values of the enumerable properties of an object
console.log(keyValue);

Object.freeze(obj); // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

Object.seal(obj); // Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

let o = Object.assign(obj); // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(o);

// way 2 using new key word
let emp = new Object();
emp.id = 102;
emp.name = "Tanushree";
emp.salary = 20000;
console.log(emp);

// way 3 using constructor
function Emp(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

const e = new Emp(103, "Sourav", "30000");
console.log(e);

delete e.name; // deleting perticuler property of an object
console.log(e);
