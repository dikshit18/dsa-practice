function interLeave(q) {
  let half = Math.round(q.length / 2);
  let stack = [];
  for (let i = 0; i < half; i++) {
    stack.push(q[i]);
  }
  for (let i = half + 1; i < q.length; i++) {}
  console.log(stack);
}
interLeave([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
