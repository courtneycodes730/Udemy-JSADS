/*
Implement a function called countUniqueValues, which accepts a sorted array and 
counts the unique values in the array. There can be negative numbers in the 
array, but it will always be sorted.
*/

/* APPROACH FROM INSTRUCTOR
breakpoint - when j reaches end of arr
start both pointers next to each other
compare if value at each pointer is the same j++
else set value at i equal to value a j, increment i
keep comparing
return i + 1
*/

function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) j++
    else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4