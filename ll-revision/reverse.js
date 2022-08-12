function reverse(head) {
  let current = head;
  let prev = null;
  while (current.next) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
function reverseRecursively(head) {
  if (!head || !head.next) return head;
  const newHead = this.reverseRecursively(head);
  const headNext = head.next;
  headNext.next = head;
  head.next = null;
  return newHead;
}
function reverseInGroup(head, K) {
  if (!head || !head.next) return head;
  const newHead = this.reverseInGroup(head.next, K);
}
