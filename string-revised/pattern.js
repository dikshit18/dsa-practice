function pattern(n) {
  if (n === 1) return 1;
  if (n === 2) return 11;
  let str = "11";
  for (let i = 3; i <= n; i++) {
    let count = 1;
    str += "&";
    let t = "";
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] !== str[j]) {
        t += count + str[j - 1];
        count = 1;
      } else count++;
    }
    str = t;
  }
  return str.includes("&") ? str.slice(0, -1) : str;
}
console.log(pattern(3));
