function findPreSucc(root, key) {
  let pre = -1,
    succ = -1;
  //lets find the key
  let temp = root;
  while (temp.data !== key) {
    if (temp.data > key) {
      succ = temp.data;
      temp = temp.left;
    } else {
      prev = temp.data;
      temp = temp.right;
    }
  }

  let leftTree = temp.left;
  while (leftTree) {
    pred = leftTree.data;
    leftTree = leftTree.right;
  }
  const rightTree = temp.right;
  while (rightTree) {
    succ = rightTree.data;
    rightTree = rightTree.left;
  }
  return [pred, succ];
}
