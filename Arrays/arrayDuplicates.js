function duplicates(a, n) {
  const m = {};
  const array = [];
  for (let i = 0; i < a.length; i++) {
    if (!m[a[i]]) {
      m[a[i]] = 1;
    } else {
      m[a[i]]++;
    }
  }
  for (const [key, value] of Object.entries(m)) {
    if (value > 1) {
      array.push(key);
    }
  }
  if (!array.length) {
    return [-1];
  } else return array;
}
console.log(duplicates([0, 3, 1, 2], 5));
