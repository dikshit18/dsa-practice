function triplet(arr, X) {
  arr = arr.sort((a, b) => a - b);
  let l = 1,
    r = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];
      if (sum === X) {
        return 1;
      }
      if (sum < X) l++;
      else r--;
    }
  }
}
