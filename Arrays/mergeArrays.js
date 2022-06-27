function merge() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8, 9, 10];
  const mergedArray = [];
  for (let i = 0, j = 0; i < arr1.length, j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else mergedArray.push(arr2[j++]);
  }
  const length = mergedArray.length,
    median = 0;
  if (length % 2 === 0) {
    console.log(mergedArray[length / 2 - 1], mergedArray[length / 2 + 1]);
    return (mergedArray[length / 2 - 1] + mergedArray[length / 2 + 1]) / 2;
  } else {
    return mergedArray[Math.round(length / 2)];
  }
}
console.log(merge());
