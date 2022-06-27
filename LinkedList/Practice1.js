class Node {
  constructor(data) {
    this.data = data;
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
    if (!this.head) {
      this.head = node;
    } else {
      let currentElem = this.head;
      while (currentElem.next) {
        currentElem = currentElem.next;
      }
      console.log(currentElem);
      currentElem.next = node;
    }
    this.size++;
  }

  removeElement() {
    if (this.head) {
      let secondLast = this.head;
      console.log("===>", secondLast);
      while (secondLast.next.next != null) {
        secondLast = secondLast.next;
        console.log("=>", secondLast);
      }
      secondLast.next = null;
    }
    this.size--;
  }

  removeElementAtIndex(index) {
    let current = this.head,
      i = 1;
    if (index === 0) {
      this.head = current.next;
      return;
    }
    while (i < index) {
      i++;
      current = current.next;
    }
    current.next = current.next?.next || null;
    this.size--;
  }

  addElementAtIndex(element, index) {
    const node = new Node(element);
    let current = this.head;
    if (!current) {
      this.head = node;
      return;
    }
    let i = 0;
    if (index === 0) {
      node.next = current;
    } else {
      while (i < index) {
        current = current.next;
        i++;
      }
      node.next = current.next;
      current.next = node;
    }
  }
}

const ll = new LinkedList();
ll.addElement(10);
ll.addElement(20);
ll.addElement(30);
ll.addElement(34);
ll.addElement(50);
console.log("LI before", JSON.stringify(ll));
ll.addElementAtIndex(100, 2);
console.log("LI After", JSON.stringify(ll));
