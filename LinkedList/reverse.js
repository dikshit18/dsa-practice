class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
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
    }
    this.size++;
  }
  reverseIteratively() {
    let current = this.head;
    let forward = current.next;
    let prev = null;
    while (current) {
      current.next = prev;
      prev = current;
      current = forward;
      forward = current?.next;
    }
    this.head = prev;
  }
  reverseRecursively(head) {
    if (!head) {
      return head;
    }
    const newHead = this.reverseIteratively(head.next);
    let headNext = newHead.next;
    headNext.next = head;
    head.next = null;
    return newHead;
  }
}
const list = new LinkedList();
list.addElement(5);
list.addElement(19);
list.addElement(20);
console.log("Before", JSON.stringify(list));
list.reverseRecursively();
console.log("After", JSON.stringify(list));
