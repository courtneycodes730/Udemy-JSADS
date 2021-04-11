/*
Write a function called binarySearch which accepts a SORTED ARRAY and a value 
and returns the index at which the value exists or -1 if the value is not in 
the array.
*/

function binarySearch(arr, val) { // Time O(log n) Space O(1)
  let left = 0;
  let right = arr.length - 1;
  let midpoint = Math.floor((left + right) / 2);

  while (left <= right) {
    if (val < arr[midpoint]) {
      right = midpoint - 1;
      midpoint = Math.floor((left + right) / 2);
    } else if (val > arr[midpoint]) {
      left = midpoint + 1;
      midpoint = Math.floor((left + right) / 2);
    } else if (val === arr[midpoint]) return midpoint;
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5], 2)); // 1
console.log(binarySearch([1,2,3,4,5], 3)); // 2
console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5], 6)); // -1
console.log(
  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)
  ); // 16
console.log(
  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,86,95,96,98,99], 100)
  ); // -1