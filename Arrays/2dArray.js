function rowWithMax1s(arr, n, m) {
  arr = [
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
  ];
  let i = 0,
    j = m - 1,
    row = -1;
  while (i < n && j >= 0) {
    if (arr[i][j] === 1) {
      row = i;
      j--;
    } else {
      i++;
    }
  }
  return row;
}
rowWithMax1s([]);
