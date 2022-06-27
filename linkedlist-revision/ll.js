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
  reverseIteratively(head) {
    let current = head;
    let forward = current.next;
    let prev = null;
    while (current) {
      current.next = prev;
      prev = current;
      current = forward;
      forward = current?.next;
    }
    head = prev;
    return head;
  }
  addOne() {
    const reverse = this.reverseIteratively();
    let carry = 0;
    const current = reverse;
    while (current) {
      if (carry === 1 && current.next === null) {
        if (current.data === 9) {
          const node = new Node(1);
          node.next = this.head;
          this.head = node;
        } else {
          current.data = current.data + 1;
        }
      } else {
        if (current.data === 9) {
          if (carry === 1) {
            current.data === 0;
            carry === 1;
          }
        } else {
          current.data += 1;
        }
      }
      current = current.next;
    }
    const head = this.reverseIteratively();
    return head;
  }
  splitCircularList() {
    let count;
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
    }
    const firstHalf = count % 2 === 0 ? count / 2 : Math.round(count / 2) + 1;
    const secondHalf = count - firstHalf;
  }
  cloneList(head) {
    let current = head;
    while (current) {
      const temp = current.next;
      current.next = new Node(current.data);
      current.next.next = temp;
      current = temp;
    }
    current = head;
    while (current.next) {
      current.next.random = current.random.next || null;
      current = current.next.next;
    }
    const original = head,
      copy = head.next,
      temp = copy;
    while (original) {
      original.next = original.next.next;
      copy.next = copy.next.next;
      original.next.next = null;
      original = original.next;
      copy = copy.next;
    }
    return temp;
  }
  deleteSmallerNodes(head) {
    const reverse = this.reverseIteratively(head);
    const current = reverse;
    let looker = current.data,
      prev;
    while (current.next) {
      looker = Math.max(looker, current.data);
      if (current.data < looker) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }
    const result = this.reverseIteratively(reverse);
    return result;
  }
  nthNode(k) {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    const diff = length - k;
    let count = 0;
    current = this.head;
    while (current) {
      if (count === diff) {
        return current.data;
      }
      count++;
      current = current.next;
    }
  }
  evenOdd(N) {
    const evenList = null,
      evenHead = null,
      oddHead = null,
      oddList = null;
    let current = head;
    while (current) {
      if (current % 2 === 0) {
        if (!evenHead) {
          evenHead = current;
        }
        evenList = current;
      } else {
      }
      current = current.next;
    }
  }
  reverseIteratively() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  reverseRecursively(head) {
    if (!head || !head.next) {
      return head;
    }
    const newHead = this.reverseRecursively(head.next);
    const headNext = head.next;
    console.log("HeadNexr...", headNext);
    headNext.next = head;
    head.next = null;
    return newHead;
  }
  detectALoop() {}
  startingPoint() {
    let slow = this.head,
      fast = this.head;
    while (slow && fast) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
      }
    }
  }
}
const list = new LinkedList();
list.addElement(5);
list.addElement(6);
list.addElement(7);
list.addElement(10);
console.log(list.reverseRecursively(list.head));
