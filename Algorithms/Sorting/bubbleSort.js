// function bubbleSort(arr) {
//   function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//   }

//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       // console.log(arr, arr[j], arr[j+1])
//       if (arr[j] > arr[j+1]) {
//         swap(arr, j, j+1);
//       }
//     }
//     // console.log("One pass complete!");
//   }

//   return arr;
// }

// optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;

  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    noSwaps = false;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }

    if (noSwaps) break;
  }

  return arr;
}


// console.log(bubbleSort([37,45,29,8]));
// console.log(bubbleSort([37,45,29,8,12,88,-3]));

console.log(bubbleSort([8,1,2,3,4,5,6,7]));