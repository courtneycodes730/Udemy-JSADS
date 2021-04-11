/*
Calculate the nth Fibonacci number, given:
Fib(n) = Fib(n-1) + Fib(n-2)
Fib(2) = 1
Fib(1) = 1
*/

// using RECURSION
// function fib(n) { // O(2^n)
//   // base case
//   if (n <= 2) return 1;

//   // recursion
//   return fib(n-1) + fib(n-2);
// }

// using DYNAMIC PROGRAMMING with memoization
// MY APPROACH - slow for large n
// function fib(n) { // O(n)
//   let memo = [];

//   function dp(n) {
//     if (n <= 2) return 1;
//     if (memo[n] !== undefined) return memo[n];
    
//     const result = fib(n-1) + fib(n-2);
//     memo[n] = result;
    
//     return result;  
//   }
  
//   return dp(n);
// }

// FROM INSTRUCTOR
// /*
function fibMemo(n, memo = []) { // O(n)
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  const result = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = result;
  
  return result;
}
// */

// using DYNAMIC PROGRAMMING with tabulation
// bottom up approach
function fibTab(n) { // O(n) and has better space complexity than fibMemo
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }

  return fibNums[n];
}

console.log(fibMemo(5)); //5
console.log(fibMemo(4)); //3
console.log(fibMemo(45));