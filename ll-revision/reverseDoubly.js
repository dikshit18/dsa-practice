function reverse(head) {
  let current = head,
    prev = null;
  while (current) {
    const temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }
}
