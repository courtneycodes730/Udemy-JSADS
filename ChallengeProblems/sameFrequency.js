/*
Write a function called sameFrequency. Given two positive integers, find out if they have the same frequency of digits
*/

function sameFrequency(num1, num2) {
  num1 = `${num1}`;
  num2 = `${num2}`;

  let frequency1 = {}
  let frequency2 = {};

  for (let i = 0; i < num1.length; i++) {
    let digit = num1[i]
    frequency1[digit] = (frequency1[digit] || 0) + 1;
  }

  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i]
    frequency2[digit] = (frequency2[digit] || 0) + 1;
  }

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) return false
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(19, 911)); // false
console.log(sameFrequency(22, 222)); // false