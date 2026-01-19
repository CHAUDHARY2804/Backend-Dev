// Array is a data structure used to store multiple values in a single variable. It is an ordered collection of items, where each item can be accessed by its index. Arrays can hold items of different data types, including numbers, strings, objects, and even other arrays.

// 1️ push() =Add at END

//  Adds element(s) to the end of the array

let arr1 = [1, 2, 3];
arr1.push(4);

console.log(arr1); 

// 2 ️ pop() = Remove from END
    // Removes the last element from the array
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2);

// 3️ unshift() = Add at BEGINNING  
// Adds element(s) to the beginning of the array
let arr3 = [2, 3, 4];
arr3.unshift(1);
console.log(arr3);

// 4️ shift() = Remove from BEGINNING
// Removes the first element from the array
let arr5 = [1, 2, 3, 4];
arr5.shift();
console.log(arr5);

// 5️ indexOf() = Find the INDEX of an element
// Returns the first index at which a given element can be found in the array
let arr6 = [1, 2, 3, 4];
let index = arr6.indexOf(3);
console.log(index);

// 6 split() = Split a string into an array
// Splits a string into an array of substrings based on a specified separator
let str = "Hello,World,JavaScript";
let arr7 = str.split(",");
console.log(arr7);

// 7 map() = Iterate and TRANSFORM
// Creates a new array populated with the results of calling a provided function on every element in the calling array
let arr8 = [1, 2, 3, 4];
let Re = arr8.map(function(element) {
    return element * 2;
});
console.log(Re);

// 8️ filter() = FILTER based on CONDITION
// Creates a new array with all elements that pass the test implemented by the provided function
let arr9 = [1, 2, 3, 4, 5, 6];
let filteredArr = arr9.filter(function (element) {
    return element % 2 === 0; // Keep only even numbers
});
console.log(filteredArr);

// 9  find() = Find FIRST MATCH
// Returns the value of the first element in the array that satisfies the provided testing function
let arr10 = [1, 2, 3, 4, 5];    
let foundElement = arr10.find(function (element) {
    return element > 3; // Find the first element greater than 3
});
console.log(foundElement);

// 10 some() = Check for ANY MATCH
// Tests whether at least one element in the array passes the test implemented by the provided function
let arr11 = [1, 2, 3, 4, 5];    
let hasEvenNumber = arr11.some(function (element) {
    return element % 2 === 0; // Check if there is any even number
});
console.log(hasEvenNumber);

// 11 isArray() = Check if VARIABLE is an ARRAY
// Determines whether the passed value is an Array
let arr12 = [1, 2, 3];
let isArray = Array.isArray(arr12);
console.log(isArray);