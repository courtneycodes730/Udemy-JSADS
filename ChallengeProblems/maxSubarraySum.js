/*
Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of a subarray with the length of the number passed to the function.
NOTE: a subarray must consist of consecutive elements from the original array.
*/

function maxSubarraySum(arr, n) {
  //EDGE CASE: arr.length < length
  if (arr.length < n) return null;
  
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  if (arr.length === n) return maxSum;

  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); //5
console.log(maxSubarraySum([2,3], 3)); //null