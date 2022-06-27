function isSubset(a1, a2, n, m) {
  let map = new Map();
  for (let i = 0; i < a1.length; i++) {
    map.set(a1[i], true);
  }
  for (let i = 0; i < a2.length; i++) {
    if (map.get(a2[i])) {
      continue;
    } else return "No";
  }
  return "Yes";
}
console.log(isSubset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1], 6, 4));
