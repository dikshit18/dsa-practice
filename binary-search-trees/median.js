let n = 0,
  counter = 0,
  median,
  prev = null,
  flag = false;
function inorderTraversal(root) {
  if (!root) return null;
  this.inorder(root.left);
  this.n++;
  this.inorder(root.right);
}
function solve(root) {
  if (!root) return null;
  this.counter++;
  if (this.counter === this.median) {
    if (this.n % 2 === 0) {
      this.flag = true;
      return prev + root.data / 2;
    } else {
      this.flag = true;
      return root.data / 2;
    }
  }
  this.solve(root.right);
  this.solve(root.left);
}
function median(root) {
  this.inorderTraversal(root);
  this.median = Math.round(this.n / 2);
  this.solve(root);
}

Number.min;
