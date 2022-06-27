function getPairsCount(arr, n, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += obj[k - arr[i]] ? obj[k - arr[i]] : 0;
    if (arr[i] + arr[i] === k) {
      count--;
    }
  }
  return count / 2;
}
