function doUnion(a, n, b, m) {
  let set = new Set();
  for (let i = 0; i < a.length; i++) {
    set.add(a[i]);
    // code here
  }
  for (let i = 0; i < b.length; i++) {
    set.add(b[i]);
    // code here
  }
}
doUnion([1, 2], 2, [1, 2, 3, 4]);
