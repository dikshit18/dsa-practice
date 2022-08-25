function search(matrix, x) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let start = 0;
  let end = cols * rows - 1;
  let mid = start + Math.floor((end - start) / 2);
  while (start <= end) {
    let element = matrix[Math.floor(mid / cols)][mid % cols];
    if (element === x) return 1;
    if (element < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = start + Math.floor((end - start) / 2);
  }
  return 0;
}
const arr = [
  [3, 30, 38],
  [36, 43, 60],
  [40, 51, 69],
];
console.log(search(arr, 51));
