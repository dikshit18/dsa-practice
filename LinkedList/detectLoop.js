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
    return this.head;
  }

  reverseRecursively() {
    let current = this.head;
    let prev = null;
    this.reverse(current, prev, current.next, current);
  }

  detectLoop1(head) {
    if (head === null) return false;
    let map = new Map();
    while (head) {
      if (map.has(head)) {
        return true;
      } else map.set(head, true);
      head = head.next;
    }
    return false;
  }
  floydDetectionLoop(head) {
    let slow = head,
      fast = head;
    while (slow && fast) {
      fast = fast.next?.next;
      slow = slow.next;
      if (fast === slow) return slow;
    }
    return null;
  }
  getStartingNode(head) {
    if (!head) return null;
    let intersection = this.floydDetectionLoop(head);
    console.log("Intersection", intersection);
    let slow = head;
    while (slow != intersection) {
      slow = slow.next;
      intersection = intersection.next;
    }
    return slow;
  }
  removeFromSortedList(element) {
    if (!this.head) return null;
    let current = head;
    while (current.next) {
      if (current.element === current.next.element) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }
  removeFromUnsortedList(element) {
    const map = new Map();
    let current = this.head,
      prev = null;
    while (current) {
      if (map.has(current.element)) {
        prev.next = current.next;
        current = prev.next;
      } else {
        map.set(current.element, true);
        prev = current;
        current = current.next;
      }
    }
    return this.head;
  }
  movingLastElementToFront() {
    let current = this.head,
      prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    current.next = this.head;
    this.head = current;
    console.log(this.head);
  }
  addOneToLinkedList() {
    let current = this.head,
      prev = null;
    while (current) {
      let forward = current.next;
      current.next = prev;
      prev = current;
      current = forward;
    }
    this.head = prev;
    let carry = 0;
    if (this.head.element === 9) {
      carry = 1;
      this.head.element = 0;
    }
    current = this.head.next;
    while (current.next) {
      if (current.element === 9) {
        carry = 1;
        current.element = 0;
        current = current.next;
      } else {
        carry = 0;
        current.element = current.element + 1;
        current = current.next;
      }
    }
    if (current.element + 1 === 10) {
      const newNode = new Node(1);
      current.next = newNode;
      current.element = 0;
    }
    console.log(this.head);
    // let carry = 0,
    //   str = "";
    // if (current.element === 9) {
    //   carry = 1;
    //   str += "0";
    //   while (current.next) {
    //     current = current.next;
    //     if (current.element === 9) {
    //       str += "0";
    //       carry = 1;
    //       current = current.next;
    //     } else {
    //       carry = 0;
    //     }
    //     if (current.element === 9) {
    //       str += "10";
    //       carry = 0;
    //     }
    //   }
    // } else {
    // }
  }
  intersection(head1, head2) {
    const map = new Map();
    let current1 = head1;
    while (current1.next) {
      map.set(head1.element, true);
    }
    let current2 = head2;
    const ll = new LinkedList();
    while (current2.next) {
      if (map.has(current2.element)) {
        const node = new Node(current2.element);
        ll.next = node;
      }
    }
    console.log(ll.head);
  }
  intersectionPoint(head1, head2) {
    let head1Length = 0,
      head2Length = 0;
    while (head1) {
      head1Length++;
      head1 = head1.next;
    }
    while (head2) {
      head2Length++;
      head2 = head2.next;
    }
    if (head1Length > head2Length) {
      let difference = head1Length - head2Length;
      for (let i = 0; i < difference; i++) {
        head1 = head1.next;
      }
    } else {
      let difference = head2Length - head1Length;
      for (let i = 0; i < difference; i++) {
        head1 = head1.next;
      }
    }
    while (head1 && head2) {
      if (head1 != head2) {
        head1 = head1.next;
        head2 = head2.next;
      }
    }
    if (head1) return head1.data;
    return -1;
  }
  sample(head1, head2) {
    console.log(head1);
    console.log(head2);
    console.log(head1 == head2);
  }
  reverseRecursively(head) {
    if (!head || !head.next) return head;
    let newHead = this.reverseRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
  reverseK(head, k) {
    if (!head) {
      return null;
    }
    let count = 0,
      current = head,
      prev = null,
      next = null;
    while (current != null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    if (!next) {
      head.next = this.reverseK(next, k);
    }
    return prev;
  }
  floydDetectLoop() {
    let slow = this.head,
      fast = this.head;
    while (slow.next && fast.head) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return slow;
    }
    return false;
  }
  findStartingPoint() {
    const intersectionPoint = this.floydDetectLoop();
    let slow = this.head;
    if (slow != intersectionPoint) {
      slow = slow.next;
      intersectionPoint = intersectionPoint.next;
    }
    return slow;
  }
  removeStartingPoint() {
    const startingPoint = this.findStartingPoint();
    let store = startingPoint;
    while (startingPoint) {
      startingPoint = startingPoint.next;
      if (startingPoint.next === store) {
        startingPoint.next = null;
      }
    }
  }
  removeDuplicatesSortedList() {
    if (!head) return null;
    let current = head;
    while (current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }
  addNumberOne() {
    const reversedList = this.reverseList();
    let carry = 0;
    let current = reversedList,
      prev = null;
    while (current) {
      if (!prev && current.data === 9) {
        //create new node here and change head
        let node = new Node(1);
        node.next = current;
        reversedList = node;
        current.data = 0;
      } else if (current.data === 9) {
        //increase carry
        carry++;
        current.data = 0;
      } else {
        //normal case, add carry

        current.data = Number(current.data) + 1;
      }
      prev = current;
      current = current.next;
    }
    console.log(reversedList);
    return this.reverseList();
  }
  intersectionLists(head1, head2) {}
  middleElement() {
    let current = this.head;
    let count = 1;
    while (current.next) {
      count++;
      current = current.next;
    }
    let middleNumber;
    if (count % 2 === 0) {
      middleNumber = count / 2 + 1;
    } else {
      middleNumber = Math.round(count / 2);
    }
    let sum = 1;
    while (this.head) {
      if (sum === middleNumber) return this.head.data;
      sum++;
      this.head = this.head.next;
    }
  }
  checkACircularList() {
    const start = this.head;
    while (this.head) {
      if (this.head === start) return 1;
      this.head = this.head.next;
    }
  }
  splitCircularNode() {
    const track = this.head;
    let count = 0;
    while (this.head) {
      count++;
      this.head = this.head.next;
    }
    let start, end;
    if (count % 2 === 0) {
      start = end = count / 2;
    } else {
      start = Math.round(count / 2);
      end = count - start;
    }
    while (this.head) {}
  }
  reverseRecursivelyAgain() {
    let href = this.head;
    let current = this.head,
      prev = null,
      forward;
    while (current) {
      forward = current.next;
      current.next = prev;
      prev = current;
      current = forward;
    }
    const reverse = prev;
    if (href === reverse) {
      return 1;
    } else return 0;
  }
  deletionInCircularNode(element) {
    let start = this.head,
      current = this.head,
      prev = null;
    while (current) {
      if (current.element === element) {
        // if ((current.next.data = start.data)) {
        //   //deleting first element
        //   prev.next;
        // } else {
        //   prev.next = current.next;
        // }
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
    console.log(JSON.stringify(this.head));
  }
  segregateList() {
    let lastElement = this.head,
      current = this.head,
      prev = null,
      oddStart = null;
    while (lastElement.next) {
      lastElement = lastElement.next;
    }
    while (current.next) {
      if (current.element === oddStart) return this.head;
      const forward = current.next;
      if (current.element % 2 !== 0) {
        if (!oddStart) oddStart = current.element;
        current.next = null;
        if (!prev) this.head = forward;
        else prev.next = forward;
        lastElement.next = current;
      }
      prev = current;
      current = forward;
    }
    return this.head;
  }
  deleteNodes() {
    let current = this.head;
    if (!current) return null;
    let prev = null;
    while (current.next) {
      if (current.next.element > current.element) {
        if (prev) {
          prev.next = current.next;
        } else this.head = current.next;
        current = current.next;
      } else {
        prev = current;
        current = current.next;
      }
    }
    return this.head;
  }
  productOfList(l1, l2) {
    let num1 = "",
      num2 = "";
    let head1 = l1.head(),
      head2 = l2.head();
    while (head1.next) {
      num1 += head1.data;
    }
    while (head2.next) {
      num2 += head2.data;
    }
    return Number(num1) * Number(num2);
  }
}
const list = new LinkedList();
list.addElement(10);
list.addElement(20);
list.addElement(30);
list.addElement(40);
list.addElement(50);
list.addElement(60);
// list.addElement(10);

console.log(list.deleteNodes(5));
// const list2 = new LinkedList();
// list2.addElement(9);
// list2.addElement(9);
// list2.addElement(5);
// list.sample(list.head, list2.head);
