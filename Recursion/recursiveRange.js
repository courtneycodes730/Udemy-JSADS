/*
Write a function called recursiveRange which accepts a number and adds up all 
the numbers from 0 to the number passed to the function.
*/

function recursiveRange(n) {
  // base case: n = 0
  if (n === 0) return 0;

  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(3)); // 6