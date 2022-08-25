function insertAtBottom(s, n) {
  if (!s.length) {
    s.push(n);
  } else {
    const elem = s[s.length - 1];
    s.pop();
    s = this.insertAtBottom(s, n);
  }
}
