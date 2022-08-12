function segregate(head, N) {
  const end = head,
    prev = head;
  while (end) {
    end = end.next;
  }
  let count = 0;
  const current = head;
  while (count < N) {
    if (current.data % 2 !== 0) {
      const next = current.next;
      current.next = null;
      if (prev === head) {
        head = next;
        prev = head;
      } else prev.next = next;
      end.next = current;
    }
    count++;
  }
}
