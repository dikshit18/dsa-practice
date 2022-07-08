function isomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const m1 = [],
    m2 = [];
  for (let i = 0; i < str1.length; i++) {
    if (!m[str1[i]] && !m[str2[i]]) {
      m1[str1[i]] = str1[i];
      m2[str2[i]] = str2[i];
    } else if (m1[str1[i]] !== str2[i]) return 0;
  }
}
console.log(isomorphic("aab", "xxy"));
