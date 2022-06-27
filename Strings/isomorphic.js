function areIsomorphic(str1, str2) {
  const lookup1 = {},
    lookup2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!lookup1[str1[i]]) {
      lookup1[str1[i]] = 1;
    } else {
      if (str1[i - 1] === str1[i]) {
        lookup1[str1[i]] = lookup1[str1[i]] + 1;
      }
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!lookup2[str2[i]]) {
      lookup2[str2[i]] = 1;
    } else {
      if (str2[i - 1] === str2[i]) {
        lookup2[str2[i]] = lookup2[str2[i]] + 1;
      }
    }
  }
  const array1 = [],
    array2 = [];
  Object.entries(lookup1).forEach(([_, value]) => {
    array1.push(value);
  });
  Object.entries(lookup2).forEach(([_, value]) => {
    array2.push(value);
  });
  console.log(array1, array2);
  if (array1.length !== array2.length) return 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return 0;
  }
  return 1;
}
console.log(areIsomorphic("toayaxz", "fbjbkrx"));
