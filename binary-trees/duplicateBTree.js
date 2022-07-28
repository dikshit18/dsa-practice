function stringify(root) {
  return root.data;
}
function solve(root) {
  if (!root) return "$";
  let str = "";
  if (!root.left && !root.right) {
    return stringify(root.data);
  }
  str += stringify(root.left);
  str += stringify(root.right);
  if (this.map.has(str)) {
    this.map.set(str, this.map.get(str) + 1);
  } else {
    map.set(str, 1);
  }
  return str;
}
function duplicate(root) {
  this.solve(root);
}
