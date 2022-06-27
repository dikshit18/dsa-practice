class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
async function solve(A, B) {
  const current = A.head;
  if (!A.head) {
    return;
  }
  let leftList, rightList, leftListHead, rightListHead;
  while (current.next) {
    if (current.data < B) {
      const node = new Node(data);
      if (!leftList) {
        leftList = node;
        leftListHead = leftList;
      } else {
        leftList.next = node;
      }
    } else {
      const node = new Node(data);
      if (!rightList) {
        rightList = node;
        rightListHead = rightList;
      } else {
        rightList.next = node;
      }
    }
    current = current.next;
  }
  while (leftListHead.next) {
    leftListHead = leftListHead.next;
  }
  leftListHead.next = rightListHead;
}
