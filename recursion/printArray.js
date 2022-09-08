const arr = [1, 2, 3, 4, 5];
function printArr(arr, index) {
  if (index == arr.length) {
    return;
  }
  console.log(arr[index]);
  printArr(arr, index + 1);
}
printArr(arr, 0);
