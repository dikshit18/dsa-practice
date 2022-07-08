function consecutiveChars(str) {
  const arr = [...str];
  const returnArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (str[i] === str[i - 1]) {
      continue;
    } else {
      returnArr.push(str[i]);
    }
  }
  return returnArr.join("");
}
console.log(consecutiveChars("aabb"));
