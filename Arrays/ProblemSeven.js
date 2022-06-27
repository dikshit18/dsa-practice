function segregateElements(arr, n) {
  //let newA
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      const negativeElement = arr[i];
      let length = i + 1;
      while (length < arr.length) {
        arr[length - 1] = arr[length];
        length++;
      }
      arr[arr.length - 1] = negativeElement;
      i = i - 1;
      n = n - 1;
    }
  }
  // return arr;
  console.log(arr);
}
segregateElements([-6, -8, 2, -8], 4);
