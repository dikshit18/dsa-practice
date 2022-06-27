function isSubset(a1, a2, n, m) {
  let occurance = {};
  for (let i = 0; i < a1.length; i++) {
    if (occurance[a1[i]]) {
      occurance[a1[i]] = occurance[a1[i]] + 1;
    } else occurance[a1[i]] = 1;
  }
  for (let i = 0; i < a2.length; i++) {
    if (!occurance[a2[i]]) return "No";
  }
  return "Yes";
}

const response = isSubset([11, 1, 13, 21, 3, 7], [11, 3, 5, 7, 1]);
console.log(response);
