/*
Write a function called productOfArray which takes in an array of numbers and
returns the product of them all
*/

function productOfArray(arr) {
  // edge case: arr = []
  if (!arr.length) return null;
  
  // base case: arr.length = 1
  if (arr.length === 1) return arr[0];

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60