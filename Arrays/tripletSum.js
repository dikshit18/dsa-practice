function find3Numbers(A, n, X) {
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    let low = i + 1,
      high = n - 1,
      remaining = A - X[i];
    while (low < high) {
      if (A[i] + A[low] + A[high] === X) {
        return 1;
      } else if (A[low] + A[high] > remaining) {
        high--;
      } else if (A[low] + A[high] < remaining) {
        low++;
      }
    }
  }
  return 0;
}
