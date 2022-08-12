function mergeTwo(head1, head2) {
  let node = new Node(-1);
  let curr1 = head1,
    curr2 = head2;
  while (curr1 && curr2) {
    if (curr1.data < curr2.data) {
      node.next = curr1;
      curr1.next = curr1.next;
    } else {
      node.next = curr2;
      curr2.next = curr2.next;
    }
    node = node.next;
  }
  node.next = c1 ? c1 : c2;
  return node.next;
}
