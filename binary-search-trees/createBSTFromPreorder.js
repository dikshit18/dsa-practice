let i = 0;
function solve(pre, min, max) {
  if (i > pre.length) return null;
  if (pre[i] < min || pre[i] > max) return null;
  const root = new Node(pre[i++]);
  root.left = this.solve(pre, min, pre[i]);
  root.left = this.solve(pre, pre[i], max);
  i++;
}
function createBST(pre) {
  i = 0;
  this.solve(pre, Number.MIN_VALUE, Number.MAX_VALUE);
}
