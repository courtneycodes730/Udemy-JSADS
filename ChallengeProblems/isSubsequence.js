/*
Write a function called isSubsequence which takes in two strings and checks 
whether the characters in the first string form a subsequence of the characters 
in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string, without 
their order changing.
*/

function isSubsequence(substring, string) {
  let substringPointer = 0;
  let stringPointer = 0;

  //EDGE CASE: substring empty
  if (!substring) return true;

  while (stringPointer < string.length) {
    if (substring[substringPointer] !== string[stringPointer]) stringPointer++
    else {
      substringPointer++;
      stringPointer++;
    }
    if (substringPointer === substring.length) return true;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false (order matters)