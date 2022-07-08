function reverseKElements(q, K) {
  const stack = [];
  for (let i = 0; i < K; i++) {
    const element = q.pop();
    stack.push(element);
  }
  for (let i = 0; i < stack.length; i++) {
    q.push(stack.pop());
  }
  for (let i = 0; i < q.size() - K; i++) {
    q.push(q.pop());
  }
  return q;
}
