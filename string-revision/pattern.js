function pattern(str, pattern) {
  const patLength = pattern.length;
  let i,
    j = 0,
    flag = false,
    tempStr = pattern[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === pattern[0]) {
      let temp = i + 1;
      while (j + 1 < patLength) {
        if (str[temp] === pattern[j + 1]) {
          tempStr += str[temp];
          temp++;
          j++;
          if (tempStr === pattern) return "Present";
        } else {
          j = 0;
          break;
        }
      }
    }
  }
  return "Not Present";
}
console.log(pattern("axzy", "xy"));
