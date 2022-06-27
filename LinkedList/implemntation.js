class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}
class List {
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
  removeLastElement() {
    let current = this.head;
    while (current.next) {
      current.next = null;
    }
    this.size--;
  }
}
const ll = new List();
ll.addElement(5);
ll.addElement(10);
console.log(ll);
ll.removeLastElement();
console.log(ll);
