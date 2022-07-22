const { main } = require("./bst");
function search(root, x) {
  if (!root) return false;
  if (root.data === x) return true;
  if (root.data < x) {
    return search(root.right);
  } else {
    return search(root.left);
  }
}
