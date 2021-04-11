/*
Implement a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates() {
  let frequency = {};

  for (let value of arguments) {
    frequency[value] = (frequency[value] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true