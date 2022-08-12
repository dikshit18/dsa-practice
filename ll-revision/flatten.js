function flatten(head) {}
function merge(a, b) {
  let temp = new Node(0);
  let res = temp;
  while (a && b) {
    if (a.data < b.data) {
      temp.bottom = a;
      temp = temp.bottom;
      a = a.bottom;
    } else {
      temp.bottom = b;
      temp = temp.bottom;
      b = b.bottom;
    }
  }
  if (a) temp.bottom = a;
  else temp.bottom = b;
  return res.bottom;
}
