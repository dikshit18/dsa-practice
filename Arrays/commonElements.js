function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  const lookupArr1 = {},
    lookupArr2 = {},
    lookupArr3 = {};
  const outputArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!lookupArr1[arr1[i]]) lookupArr1[arr1[i]] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!lookupArr2[arr2[i]]) lookupArr2[arr2[i]] = 1;
  }
  for (let i = 0; i < arr3.length; i++) {
    if (!lookupArr3[arr3[i]]) lookupArr3[arr3[i]] = 1;
  }
  console.log(lookupArr1, lookupArr2, lookupArr3);

  for (let i = 0; i < arr1.length; i++) {
    if (lookupArr1[arr1[i]] && lookupArr2[arr1[i]] && lookupArr3[arr1[i]]) {
      outputArr.push(arr1[i]);
    }
  }
  return outputArr;
}
console.log(
  commonElements(
    [1, 5, 10, 20, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120]
  )
);
