function subArrayExists(arr, N) {
  let sum = 0,
    map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] === 0 || sum === 0 || map.get(sum)) {
      return "Yes";
    } else {
      map.set(sum, 1);
    }
    console.log(map);
  }
  return "No";
}
console.log(subArrayExists([1, 2, 3, 4, 5], 5));
