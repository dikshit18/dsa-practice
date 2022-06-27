class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addElement(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.size++;
  }
  reverseInGroup(head, k) {
    if (!head) return null;
    const current = head;
    let prev = null;
    let count = 0;
    while (current && count < k) {
      const next = current.next;
      let oldPrev = current.prev;
      current.prev = current.next;
      current.next = oldPrev;
      prev = current;
      current = next;
    }
    const reversedList = this.reverseInGroup(current.next, k);
    head.next = reversedList;
  }
}
const list = new LinkedList();
list.addElement(5);
list.addElement(6);
list.addElement(7);
list.addElement(10);
console.log(ist);
