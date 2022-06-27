function sort012(arr) {
  let low = 0,
    medium = 0,
    high = arr.length - 1;
  while (medium <= high) {
    if (arr[medium] === 0) {
      swap(arr, medium, low);
      low++;
      medium++;
    } else if (arr[medium] === 1) {
      medium++;
    } else {
      swap(arr, medium, high);
      high--;
    }
  }
}
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}
