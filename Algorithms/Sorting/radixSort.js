function getDigit(num, place) {
  // num = String(num);
  // let digit;
  // let i = num.length - 1;

  // while (place >= 0) {
  //   digit = num[i];
  //   i--;
  //   place--
  // }

  // if (!digit) digit = 0;

  // return Number(digit);

  // FROM INSTRUCTOR (who got it from StackOverflow)
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// console.log(getDigit(12345, 0)); //5
// console.log(getDigit(12345, 1)); //4
// console.log(getDigit(12345, 2)); //3
// console.log(getDigit(12345, 3)); //2
// console.log(getDigit(12345, 4)); //1
// console.log(getDigit(12345, 5)); //0

function digitCount(num) {
  // num = String(num);
  // let count = 0;

  // for (const digit of num) {
  //   count++
  // };

  // return count;

  // FROM INSTRUCTOR
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(3255)); //4
// console.log(digitCount(777)); //3

function mostDigits(arr) {
  let most = 0;

  for (const number of arr) {
    most = Math.max(most, digitCount(number));
  }

  return most;
}
// console.log(mostDigits([1,25,4532,314])); //4

function radixSort(arr) {
  let numOfRuns = mostDigits(arr);
  let i = 0;

  while (numOfRuns) {
    // let buckets = new Array(10);
    let buckets = Array.from({length: 10}, () => []);

    for (const number of arr) {
      let idx = getDigit(number, i);
      // if (buckets[idx]) {
      //   buckets[idx].push(number);
      // } else buckets[idx] = [number];
      buckets[idx].push(number);
    }

    arr = [].concat(...buckets)

    i++;
    numOfRuns--;
  }

  return arr;
}
console.log(radixSort([29,1,145,37,14])) // [1,14,29,37,145]
console.log(radixSort([23,345,5467,12,2345,9852])) // [12,23,345,2345,5467,9852]