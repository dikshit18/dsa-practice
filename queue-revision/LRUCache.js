class Node {
  constructor(key, value) {
    this.next = null;
    this.prev = null;
    this.key = key;
    this.value = value;
  }
}
class LRU {
  constructor(cap) {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.map = new Map();
    this.capacity = cap;
    this.count = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.head.prev = null;
    this.tail.next = null;
  }
  insertAtStart(value) {
    const node = new Node();
  }
  deleteNode(location) {}
  getNode() {}
}
