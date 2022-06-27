function anagrams(str1, str2, k) {
  const lookup1 = {},
    lookup2 = {};
  if (str1.length !== str2.length) {
    return 0;
  }
  for (let i = 0; i < str1.length; i++) {
    if (!lookup1[str1[i]]) {
      lookup1[str1[i]] = 1;
    } else lookup1[str1[i]] = lookup1[str1[i]] + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!lookup2[str2[i]]) {
      lookup2[str2[i]] = 1;
    } else lookup2[str2[i]] = lookup2[str2[i]] + 1;
  }
  let sum = 0;
  for (const [keys, value] of Object.entries(lookup1)) {
    sum += Math.abs(lookup1[keys] || 0) - Math.abs(lookup2[keys] || 0);
  }
  console.log(sum);
  if (sum <= k) return 1;
  else return 0;
}
console.log(anagrams("fodr", "gork", 2));
