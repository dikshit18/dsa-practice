class Node {
  constructor(element) {
    this.prev = null;
    this.next = null;
    this.element = element;
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
  insertAtIndex(element, index) {
    const node = new Node(element);
    let i = 0,
      current = this.head;
    while (current.next) {
      i++;
      while (i === index) {
        node.prev = current.prev;
        node.next = current;
      }
    }
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    while (current.next) {
      const forward = current.next;
      current.next = prev;
      current.prev = forward;
      prev = current;
      current = forward;
    }
    return this.head;
  }
  pairSum(number) {
    let first = this.head,
      last = this.head;
    while (last.next) last = last.next;
    while (first != last) {
      if (first.element + last.element === number) {
        console.log("Found Pair....", first.element, last.element);
        first = first.next;
        last = last.prev;
      } else {
        if (first.element + last.element < number) {
          first = first.next;
        } else {
          last = last.prev;
        }
      }
    }
  }
  rotateDoublyList(number) {
    let current = this.head;
    let count = 1;
    let end = this.head;
    while (end.next) {
      end = end.next;
    }
    while (current) {
      if (current.element === number) {
        let forward = current.next;
        current.next = null;
        end.next = this.head;
        this.head.prev = end;
        this.head = forward;
        this.head.prev = null;
        return this.head;
      }
      count++;
      current = current.next;
    }
  }
}
const ll = new LinkedList();
ll.addElement(1);
ll.addElement(2);
ll.addElement(4);
ll.addElement(5);
ll.addElement(6);
console.log(ll.rotateDoublyList(2));
