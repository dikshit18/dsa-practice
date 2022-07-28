function solve(root, K, array) {
  if (!root) return;
  array.push(root.data);
  this.solve(root.left, K, array);
  this.solve(root.right, K, array);
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    sum += array[i];
    if (sum === K) this.count++;
  }
  array.pop();
}
let count = 0;
function sumK(root) {
  const array = [];
  this.solve(root, K, []);
}
