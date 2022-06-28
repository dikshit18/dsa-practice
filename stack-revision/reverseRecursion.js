function insertAtPosition(x, arr) {
  if (!arr.length) {
    arr.push(x);
  } else {
    const el = arr.pop();
    insertAtPosition(x, arr);
    arr.push(el);
  }
  return arr;
}
function reverse(arr) {
  while (arr.length) {
    let x = arr.pop();
    reverse(arr);
    arr = insertAtPosition(x, arr);
    return arr;
  }
}
console.log(reverse([1, 2, 3, 4, 5, 6]));
