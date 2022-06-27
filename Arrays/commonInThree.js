function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  let obj = {},
    output = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = 1;
    else obj[arr1[i]] = obj[arr1[i]] + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]] && obj[arr3[i]]) {
      output.push(obj[arr1[i]]);
    }
  }
  console.log(output);
}
commonElements(
  [1, 5, 10, 20, 40, 80],
  [6, 7, 20, 80, 100],
  [3, 4, 15, 20, 30, 70, 80, 120]
);
