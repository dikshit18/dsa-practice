const result = [];
const arr1 = [1, 4, 5, 6];
const arr2 = [2, 8, 9];
function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr[i] < arr[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[i]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
}
