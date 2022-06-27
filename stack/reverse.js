function reverse(S) {
  const arr = [],
    arr2 = [];
  for (let i = 0; i < S.length; i++) {
    arr.push(S[i]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    arr.pop();
    arr2.push(element);
  }
  return arr2.join("").toString();
}
console.log(reverse("GeeksforGeeks"));
