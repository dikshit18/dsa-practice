let flag = false;
function balanced(root) {
  if (!root) return 0;
  const left = this.balanced(root.left);
  const right = this.balanced(root.right);
  const diff = Math.abs(left - right);
  if (diff > 1) flag = true;
  return 1 + Math.max(left, right);
}
