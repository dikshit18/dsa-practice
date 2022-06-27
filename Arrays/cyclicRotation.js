function rotate(arr, n) {
  //for (let i = 0; i < arr.length; i++) {
    const element = arr[n - 1];
    const start = 1;
    while (n > start) {
        arr[n - 1] = arr[n - 2];
        n--;
    }
    arr[0] = element;
    return arr;
}
console.log(rotate([1, 2, 3, 4, 5], 5));
