function shuffledString(str1, str2) {
  const concatStr =
    str1.split("").sort().join("") + str2.split("").sort().join("");
  let i = 0,
    j = 0;
  for (let k = 0; i < concatStr.length; i++) {
    const element = concatStr[k];
    if (element === str1[i]) {
      i++;
    } else if (element === str2[j]) {
      j++;
    } else {
      return -1;
    }
  }
}
console.log(shuffledString("onetwofour", "hellofourtwooneworld"));
