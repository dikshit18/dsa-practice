function segregateElements(arr, N) {
  let newArr = [];
  //pos loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }
}
console.log(segregateElements([1, 3, 2, 11, 6, -1, -7, -5]));
