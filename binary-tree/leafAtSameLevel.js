let answer = 1;
function leaf(root, height, flag, value) {
  if (!root) return;
  if (!answer) return;
  if (!root.left && !root.right) {
    if (value === -1) {
      value = height;
    } else {
      if (h != value) {
        answer = 0;
      }
    }
    return;
  }
  leaf(root.left, height + 1, flag, value);
  leaf(root.right, height + 1, flag, value);
}
function leafAtSameLevel(root) {
  let height = 0,
    flag = 0,
    value = -1;
  leaf(root, height, flag, value);
  return answer;
}
