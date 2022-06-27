function find3Numbers(A, n, X) {
  const lookup = new Set();
  let found = false;
  for (let i = 0; i < A.length; i++) {
    lookup.add(A[i]);
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const sum = A[i] + A[j];
      const requiredNumber = X - sum;
      if (
        lookup.has(requiredNumber) &&
        requiredNumber !== A[i] &&
        requiredNumber !== A[J]
      ) {
        found = true;
        break;
      }
    }
  }
  if (found) return 1;
  else return false;
}
find3Numbers(
  [
    589, 343, 609, 61, 222, 759, 955, 889, 147, 691, 950, 844, 431, 621, 749,
    68, 537, 784, 36, 227, 186, 39, 854, 630, 225, 749, 924, 360, 258, 767, 945,
    956, 319, 727, 412, 26, 356, 2, 550, 497, 585, 516, 965, 343, 76, 914, 143,
    197, 949, 73,
  ],
  50,
  182
);
