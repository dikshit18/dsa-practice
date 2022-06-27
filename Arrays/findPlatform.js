function findPlatform(arr, dep, n) {
  arr = arr.sort();
  dep = dep.sort();
  let i,
    j = 0,
    platform = 0;
  while (i < arr.length) {
    if (arr[i] > dep[j]) {
      platform++;
      i++;
    } else {
      j++;
    }
  }
}
findPlatform(
  [0900, 0940, 0950, 1100, 1500, 1800],
  [0910, 1200, 1120, 1130, 1900, 2000]
);
