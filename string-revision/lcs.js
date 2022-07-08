function subsequence(x, y, s1, s2) {
  let returnArr = [];
  s1 = [...new Set(s1)];
  s2 = [...new Set(s2)];
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        returnArr.push(s2[j]);
      }
    }
  }
  return returnArr.length;
}
subsequence(0, 0, "GEBEOCFUFTSXDIXTIGSIEEHKCHZ", "DFLILRJQFNXZ");
