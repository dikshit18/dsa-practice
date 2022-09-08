const arr = [1, 2, 3, 4, 5];
function reverse(arr, index) {
  if (index === arr.length) {
    return;
  }
  reverse(arr, index + 1);
  console.log(arr[index]);
}
reverse(arr, 0);
