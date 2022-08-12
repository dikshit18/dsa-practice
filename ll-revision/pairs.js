function pairs(head) {
  let left = head,
    right = head;
  while (right) {
    right = right.next;
  }
  while (left < right) {
    if (left.data + right.data === K) {
      //save pair
    } else {
      if (left.data + right.data > K) {
        right = right.prev;
      } else {
        left = left.next;
      }
    }
  }
}
