function BuildTree(root, item) {
  if (!root) {
    const node = new Node(item);
    return node;
  } else {
    if (root.data < item) {
      return this.BuildTree(root.right, item);
    } else {
      return this.BuildTree(root.left, item);
    }
  }
}
function main() {
  const treeStr = "1 5 2 4 9 8 6 7";
  let root = null;
  for (const itm of str) {
    root = BuildTree(null, item);
  }
  console.log(root);
  return root;
}
