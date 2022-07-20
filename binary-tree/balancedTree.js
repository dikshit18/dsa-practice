const {} = require("./tree-util");
function height() {}
function balanced(root) {
  if (!root) return null;
  const left = balanced(root.left);
  const right = balanced(root.left);
  const diff = Math.abs(left.data - right.data) <= 1;
  if (diff) return 1;
  else return false;
}
