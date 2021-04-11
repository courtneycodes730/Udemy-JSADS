function merge(arr1, arr2) {
  let mergedArr = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  // let remainder = i < arr1.length - 1 ? arr1.slice(i) : arr2.slice(j);

  // if (remainder.length) {
  //   mergedArr.push(...remainder)
  // }

  // ALTERNATIVE (of above) to account for remainder
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  

  return mergedArr;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // recursion
  let midpoint = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));

  return merge(left, right);
}

// console.log(merge([1,10,50], [2,14,99,100])); // [1,2,10,14,50,99,100]
console.log(mergeSort([10,24,76,73,72,1,9])); // [1,9,10,24,72,73,76]