let result = [];
function morrisTraversal(root) {
  let current = root;
  while (root) {
    if (current.left) {
      result.push(current.data);
      current = current.right;
    } else {
      let temp = current.left;
      while (temp.right && temp.right !== current) {
        current = current.right;
      }
      if (!temp.right) {
        temp.right = current;
        current = current.left;
      } else {
        temp.right = null;
        current = current.right;
      }
    }
  }
}
