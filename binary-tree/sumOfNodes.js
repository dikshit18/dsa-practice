function sumOfNodes(root) {
  if (!root) {
    return null;
  }
  const leftArr = sumOfNodes(root.left);
  const rightArr = sumOfNodes(root.right);
  if (leftMap[0] > rightArr[0])
    return [leftArr[0] + 1, rightArr[0] + root.data];
  if (leftMap[0] < rightArr[0])
    return [rightArr[0] + 1, rightArr[1] + root.data];
  else return [leftArr[0] + 1, Math.max(leftArr[1], rightArr[1]) + root.data];
}
