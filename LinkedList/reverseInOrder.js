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
  //   reverseIteratively() {
  //     let current = this.head;
  //     let forward = current.next;
  //     let prev = null;
  //     while (current) {
  //       current.next = prev;
  //       prev = current;
  //       current = forward;
  //       forward = current?.next;
  //     }
  //     this.head = prev;
  //   }

  reverseInOrder(k) {
    if (!this.head) return null;
    let prev = null;
    let current = this.head;
    let count = 0;
    let next = null;
    while (current != null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    if (next != null) {
      this.head.next = this.reverseInOrder(next, k);
    }
    return prev;
  }
}
const list = new LinkedList();
list.addElement(5);
list.addElement(19);
list.addElement(20);
console.log("Before", JSON.stringify(list));
list.reverseInOrder(2);
console.log("After", JSON.stringify(list));
