function kadene(arr) {
  let max = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < arr[i]) {
    }
    if (arr[i] < 0) sum = 0;
  }
}
