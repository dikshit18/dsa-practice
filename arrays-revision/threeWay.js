function threeWay(arr, a, b) {
  let left = 0,
    right = arr.length - 1;
  for (let i = 0; i < arr.length; ) {
    if (left > right && arr[i] < a) {
      const temp = arr[i];
      arr[i] = arr[left];
      arr[left] = temp;
      left++;
    } else if (arr[i] > b) {
      const temp = arr[i];
      arr[i] = arr[right];
      arr[right] = temp;
      right--;
      i++;
    }
  }
  return arr;
}
