function reverseString(A) {
  const arr = A.split(" ");
  if (arr.length === 1) return A;
  const arr2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != "") arr2.push(arr[i]);
  }
  return arr2.join(" ");
}
reverseString(
  "qxkpvo  f   w vdg t wqxy ln mbqmtwwbaegx   mskgtlenfnipsl bddjk znhksoewu zwh bd fqecoskmo"
);
