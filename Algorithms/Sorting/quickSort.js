function pivot(arr, start=0, end=arr.length-1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivotValue = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivotValue) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

function quickSort(arr, left=0, right = arr.length-1) {
  // base case
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    quickSort(arr, left, pivotIdx - 1); // left side
    quickSort(arr, pivotIdx+1, right); // right side
  }

  return arr;
}

// console.log(pivot([26,23,27,44,17,39,42,43,1])); // 3
console.log(quickSort([26,23,27,44,17,39,42,43,1])); 
// [1,17,23,26,27,39,42,43,44]