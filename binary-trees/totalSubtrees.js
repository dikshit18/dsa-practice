let map = new Map();
function solve(root) {
  if (!root) return "#";
  const left = this.solve(root.left);
  const right = this.solve(root.right);
  const str = root.data + left + right;
  if (map.has(str)) {
    map.set(str, 1);
  } else {
    map.set(str, map.get(str) + 1);
  }
}
function subTrees(root) {
  this.solve(root);
  let count = 0;
  map.forEach((value) => {
    if (value > 1) {
      count++;
    }
  });
  return count;
}
