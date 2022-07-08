function transformString(str1, str2) {
  if (str1.length !== str2.length) return -1;
  let ascii1 = 0,
    ascii2 = 0;
  const sortedStr1 = [...str1].sort((a, b) => a.localeCompare(b)).join("");
  const sortedStr2 = [...str2].sort((a, b) => a.localeCompare(b)).join("");
  if (sortedStr1 !== sortedStr2) return -1;
  let j = str2.length - 1,
    i = str1.length - 1,
    count = 0;
  while (i >= 0 && j >= 0) {
    if (str1[i] === str2[j]) {
      i--;
      j--;
    } else {
      i--;
      count++;
    }
  }
  return count;
}
console.log(transformString("anod", "mpad"));
