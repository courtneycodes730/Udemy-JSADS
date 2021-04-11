/*
Write a recusive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  let newStr = "";
  let end = str.length - 1;

  function helper(str, end) {
    newStr += str[end];
  }
  
  while (end >= 0) {
    helper(str, end);
    end--
  }

  return newStr
}

console.log(reverse("awesome")); // "emosewa"
console.log(reverse("rithmschool")); // "loohcsmhtir"