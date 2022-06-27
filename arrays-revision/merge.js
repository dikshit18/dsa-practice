function merge(arr1, arr2, n, m) {
  if (n >= m) {
    let carry = arr1[0];
    for (let i = 0; i < n; i++) {
      if (carry < arr2[i]) {
        arr1.push(arr1[i]);
        carry = arr1[i + 1];
        arr1[i + 1] = arr2[i];
      }
    }
    console.log(arr1);
  }

  //   if (m > n) {
  //     for (let i = 0; i < arr1.length; i++) {}
  //   }
}
merge([0, 2, 6, 8, 9], [1, 3, 5, 7], 5, 4);
