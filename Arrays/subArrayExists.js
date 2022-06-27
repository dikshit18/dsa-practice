function subArrayExists(arr, n) {
  let sum = 0,
    start = 0,
    end = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] <= 0) {
      while (sum !== 0) {
        sum -= arr[start];
        start = start + 1;
        if (sum < 0) end = i + 1;
        sum += arr[end];
      }
      break;
    }
  }
  console.log(start, end);
}

subArrayExists([4, 2, 0, 1, 6]);
