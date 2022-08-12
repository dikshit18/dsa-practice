function intersection(head1, head2) {
  let head = null,
    curr;
  let curr1 = head1,
    curr2 = head2;
  while (curr1 && curr2) {
    if (curr1.data === curr2.data) {
      if (!head) {
        const node = new Node(curr1.data);
        head = node;
        curr = node;
      } else {
        const node = new Node(curr1.data);
        curr.next = node;
        curr = curr.next;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    } else {
      if (curr1.data > curr2.data) {
        curr2 = curr2.next;
      } else {
        curr1 = curr1.next;
      }
    }
  }
  return head;
}
