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

  reverseList() {
    let current = this.head;
    let prev = null;
    let forward;
    while (current) {
      forward = current.next;
      current.next = prev;
      prev = current;
      current = forward;
    }
    this.head = prev;
    //const
  }

  reverseRecursively() {
    let current = this.head;
    let prev = null;
    this.reverse(current, prev, current.next, current);
  }

  reverse(current, prev, forward, head) {
    if (!forward) {
      head = prev;
    }
    current.next = prev;
    prev = current;
    forward = forward.next;
    this.reverse(current, prev, forward, head);
  }
}
const list = new LinkedList();
list.addElement(5);
list.addElement(19);
list.addElement(20);
console.log("Before", JSON.stringify(list));
list.reverseList();
console.log("After", JSON.stringify(list));
