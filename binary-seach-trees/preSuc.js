function preSuc(root, x, prev, suc) {
  if (!root) return null;
  //element found
  if (root.data === x) {
    let temp = root.left;
    while (temp.right) {
      temp = temp.right;
    }
    prev = temp.data;
    return prev;
  }

  //move left
  if (root.data > x) {
    preSuc(root.right, x, prev, suc);
  }

  //move right
  if (root.data < x) {
    preSuc(root.left, x, prev, suc);
  }
}
function main() {
  let prev, suc;
  preSuc(root, x, prev, suc);
}
