function subsequence(str) {
  print("", 0, str.length, str);
  return;
}
function print(t, i, n, s) {
  if (i === n) console.log(t);
  else {
    print(t, i + 1, n, s);
    t = t + s[i];
    print(t, i + 1, n, s);
  }
}
console.log(subsequence("abc"));
