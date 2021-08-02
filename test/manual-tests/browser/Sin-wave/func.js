// Concat an array of arrays
function concatArray(arr) {
  let newArr = [];
  newArr = arr[0].concat(arr[1]);
  for (let i = 1; i < arr.length - 1; i++) {
    newArr = newArr.concat(arr[i + 1]);
  }
  return newArr;
}
