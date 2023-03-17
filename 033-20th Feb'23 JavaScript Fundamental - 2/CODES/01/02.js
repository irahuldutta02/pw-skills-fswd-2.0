let arr = [1, 2, 3, 4, 5];

arr.push(6, 7); // Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr);

arr.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

arr.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

arr.unshift(9); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);

//  ----------------------------------------------------------------------------------------------

let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 6, 4, 7, 7];

let a3 = a1.concat(a2); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(a1, a2, a3);

let s = a3.join(","); // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(s); // 1,2,3,4,5,5,6,4,7,7

a3.reverse(); // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(a3);

console.log(a3.indexOf(7)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.slice(2, 5)); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

arr1.splice(2, 0, 11); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr1);
