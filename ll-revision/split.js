function split(head) {
  let size = 0,
    current = head;
  while (current) {
    size++;
    current = current.next;
  }
  const first = Math.round(size / 2);
  const second = size - first;
  let head1 = null,
    curr1 = null,
    counter = 0,
    head2 = null,
    curr2 = null;
  current = head;
  while (counter < first) {
    if (!head1) {
      const node = new Node(current.data);
      head1 = node;
      curr1 = node;
      current = current.next;
    } else {
      const node = new Node(current.data);
      curr1.next = node;
      curr1 = curr1.next;
    }
  }
  counter = 0;
  current = head;
  while (counter < second) {
    if (!head2) {
      const node = new Node(current.data);
      head2 = node;
      curr2 = node;
      current = current.next;
    } else {
      const node = new Node(current.data);
      curr2.next = node;
      curr2 = curr2.next;
    }
  }
  return [head1, head2];
}
