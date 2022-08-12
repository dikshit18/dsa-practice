function rotate(head, K) {
  let counter = 0;
  while (head && counter < K) {
    head = head.next;
    counter++;
  }
  const current = head.next;
  const start = head.next;

  head.next.prev = null;
  head.next = null;
  while (current) {
    current.next;
  }
  current.next = head;
  current.next.prev = current;
  return start;
}
