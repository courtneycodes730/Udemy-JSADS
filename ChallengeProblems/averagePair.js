/**
 * Write a function called averagePair. Given a sorted array of integers and a
 * target average, determine if there is a pair of values in the array where the
 * average of the pair equals the target average. There may be more than one
 * pair that matches the average target.
 */

/* APPROACH
1. Two pointers: left = 0; right = arr.length - 1
2. Compare sum of arr[left] and arr[right] to target * 2
3. Conditions:
  - if sum > target * 2: right--
  - else if sum < target * 2: left++
  - else return true;
4. return false

EDGE CASES
Empty array
*/
 

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (!arr.length) return false;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average > target) right--
    else if (average < target) left++
    else return true;
  }

  return false;
}

console.log(averagePair([1,2,3],2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); //true
console.log(averagePair([-1,0,3,4,5,6],4.1)); //false
console.log(averagePair([],4)); //false