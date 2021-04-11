class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let result = 0;
    let WEIRD_PRIME = 31;
  
    // loops through at most 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // map "a" to 1, "b" to 2, etc. by using charCodeAt() - 96
      let value = key.charCodeAt(i) - 96;
      result = (result * WEIRD_PRIME + value) % this.keyMap.length;
    }
  
    return result;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);

    // TO DO: account for duplicate key -- should just update value
    // if (this.keyMap[index].length) {
    //   for (let item of this.keyMap[index]) {
    //     if (item[0] === key) {
    //       item[1] = value;
    //     }
    //   }
    //   // this.keyMap[index].push([key, value]);
    //   // console.log(this.keyMap[index]);
    // }
    // this.keyMap[index].push([key, value]);
    // console.log(this.keyMap[index]);
    
    return true;
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let keyInMap of this.keyMap[index]) {
        if (keyInMap[0] === key) {
          return keyInMap[1];
        }
      }
    }
  }

  // returns all unique keys in keyMap
  keys() {
    let keys = [];

    for (let item of this.keyMap) {
      if (!item) continue;

      for (let innerItem of item) {
        if (!keys.includes(innerItem[0])) {
          keys.push(innerItem[0]);
        }
      }
    }

    return keys;
  }

  // returns all unique values in keyMap
  values() {
    let values = [];

    for (let item of this.keyMap) {
      if (!item) continue;

      for (let innerItem of item) {
        if (!values.includes(innerItem[1])) {
          values.push(innerItem[1]);
        }
      }
    }

    return values;
  }
}

let hash = new HashTable();
hash.set("hello", 1);
hash.set("pink", 2);
hash.set("salmon", 3);
hash.set("dog", 4);
hash.set("gray", 5);
hash.set("purple", 6);
hash.set("blue", 7);
hash.set("yellow", 7);
hash.set("yellow", 8);
console.log(hash);

// console.log(hash.get("I love")); // undefined
// console.log(hash.get("dog")); // 4

// console.log(hash.keys());
// console.log(hash.values());









// hash function

// NOT A GOOD FUNCTION
// function hash(key, arrLength) {
//   let result = 0;

//   for (let i = 0; i < key.length; i++) {
//     // map "a" to 1, "b" to 2, etc. by using charCodeAt() - 96
//     let value = key.charCodeAt(i) - 96;
//     result = (result + value) % arrLength;
//   }

//   return result;
// }

// BETTER - using a prime arrLength value
// function hash(key, arrLength) {
//   let result = 0;
//   let WEIRD_PRIME = 31;

//   // loops through at most 100 characters
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     // map "a" to 1, "b" to 2, etc. by using charCodeAt() - 96
//     let value = key.charCodeAt(i) - 96;
//     result = (result * WEIRD_PRIME + value) % arrLength;
//   }

//   return result;
// }

// console.log(hash("gray", 13));    // BAD: 1 GOOD: 3
// console.log(hash("orange", 13));  // BAD: 0 GOOD: 10
// console.log(hash("black", 13));   // BAD: 9 GOOD: 6
// console.log(hash("pink", 13));    // BAD: 0 GOOD: 5
// console.log(hash("blue", 13));    // BAD: 0 GOOD: 10
// console.log(hash("white", 13));   // BAD: 5 GOOD: 1