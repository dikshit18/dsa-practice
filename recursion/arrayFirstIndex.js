const arr = [1, 2, 4, 5, 6, 2, 7, 8, 9];
function findIndex(arr, index, item) {
  if (index == arr.length) return -1;
  if (arr[index] === item) {
    return index;
  }
  const i = findIndex(arr, index + 1, item);
  return i;
}
console.log(findIndex(arr, 0, 3));
