/*
Given two strings, write a function to determine if the second string is an 
anagram of the first.
*/

/* APPROACH
Using frequency counters:
split strings to create arrays
iterate over both arrays and create frequency counter objs
check value for same key in each obj is the same
*/

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	// MY APPROACH
	// let frequencyCounter1 = {};
	// let frequencyCounter2 = {};

	// for (const letter of str1) {
	// 	frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
	// }
	// for (const letter of str2) {
	// 	frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
	// }

	// for (let key in frequencyCounter1) {
	// 	if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
	// }

	// REFACTORED
	let lookup = {};
	for (const letter of str1) {
		lookup[letter] = (lookup[letter] || 0) + 1;
	}
	for (const letter of str2) {
		if (!lookup[letter]) return false
		else lookup[letter] -= 1;
	}

	return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("cinema", "iceman")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("textile", "latex")); // false
console.log(validAnagram("awesome", "awesom")); // false
