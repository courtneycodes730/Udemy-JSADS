//
function selectionSort(arr) {

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    console.log("SWAPPED", idx1, ",", idx2);
    console.log("*******", arr);
  }

  for (let i = 0; i < arr.length; i++) {
    let idxOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxOfMin]) {
        idxOfMin = j; 
      }
    }

    // optimized to reduce swapping at same index
    if (i !== idxOfMin) swap(arr, i, idxOfMin);
  }

  return arr;
}

// console.log(selectionSort([37,45,29,8,32]));
console.log(selectionSort([0,2,4,37,45,29,8,32]));