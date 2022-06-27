function rearrange(arr, n) {
  const posArray = [];
  const negArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negArray.push(arr[i]);
    } else {
      posArray.push(arr[i]);
    }
  }
  const finalArray = [];
  let i = 0,
    j = 0;
  while (i < posArray.length && j < negArray.length) {
    finalArray.push(posArray[i]);
    finalArray.push(negArray[j]);
    i++;
    j++;
  }
  while (i < posArray.length) {
    finalArray.push(posArray[i]);
    i++;
  }
  while (j < negArray.length) {
    finalArray.push(negArray[i]);
    j++;
  }
  return finalArray;
}
rearrange([9, 4, -2, -1, 5, 0, -5, -3, 2], 9);
