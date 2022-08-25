function solve(root, array, k) {
  if (!root) return;
  array.push(root.data);
  this.solve(root.left, array, k);
  this.solve(root.right, array, k);
  for (let i = 0; i < array.length; i++) {
    sum += arr[i];
    if (sum === k) count++;
  }
  array.pop();
}
function KSumPath(root, k) {
  const array = [];
  this.solve(root, array, k);
}
