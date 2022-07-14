const readlineSync = require("readline-sync");
class Node {
  constructor(data) {
    this.data = data;
    this.right = this.left = null;
  }
}
function BuildTree(root) {
  let data = readlineSync.question("Enter the data:");
  root = new Node(Number(data));

  if (Number(data) === -1) {
    return null;
  }
  readlineSync.question(`Enter the left side of ${data}`);
  root.left = BuildTree(root.left);
  readlineSync.question(`Enter the right side of ${data}`);
  root.right = BuildTree(root.right);
  return root;
}
function levelOrderTraversal(root) {
  let queue = [root],
    res = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    console.log("=>", queue[0].data);
    res.push(top?.data);
    if (top.left) {
      queue.push(top.left);
    }
    if (top.right) {
      queue.push(top.right);
    }
    queue_count++;
  }
  console.log(res);
}
function reverseLevelTraversal(root) {
  const queue = [root];
  let res = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    res.push(top && top.data);
    if (top.right) {
      queue.push(top.right);
    }
    if (top.left) {
      queue.push(top.left);
    }
    queue_count++;
  }
  return res.reverse();
}
function inorderTraversal(root, response) {
  if (!root) return null;
  inorderTraversal(root.left, response);
  response.push(root.data);
  inorderTraversal(root.right, response);
  return response;
}
function inOrderIterative(root) {
  const result = [];
  let currentNode = root,
    stack = [];

  while (true) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      console.log("stack...,", root);
      if (!stack.length) {
        break;
      }
      const elem = stack.pop();
      result.push(elem.data);
      currentNode = elem.right;
    }
  }
  return result;
}
function postOrderIterative(root) {
  const resp = [];
  const stack = [];
  let currentNode = root,
    temp;
  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      temp = stack[stack.length - 1].right;
      if (!temp) {
        temp = stack.pop();
        resp.push(temp.data);
        while (stack.length && temp === stack[stack.length - 1].right) {
          temp = stack.pop();
          resp.push(temp.data);
        }
      } else currentNode = temp;
    }
  }
  return resp;
}
function preOrderIterative(root) {
  const stack = [root];
  const response = [];
  while (stack.length) {
    const element = stack.pop();
    response.push(element.data);
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      stack.push(root.left);
    }
  }
  return response;
}
function heightOfTree(root) {
  if (!root) return 0;
  return Math.max(heightOfTree(root.left), heightOfTree(root.right)) + 1;
}
function height(root) {
  //caculates diameter
  let answer = 0;
  if (!root) {
    return 0;
  }
  const left = height(root.left);
  const right = height(root.right);
  answer = Math.max(answer, left + height + 1);
  return 1 + left + right;
}
function mirrorTree(root) {
  if (!root) return null;
  this.mirrorTree(root.left);
  this.mirrorTree(root.right);
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
}
function leftSideViewLogic(root, list, level) {
  if (!root) return null;
  //if (!list[level]) {
  list[level] = root;
  //}
  leftSideViewLogic(root.left, list, level + 1);
  leftSideViewLogic(root.right, list, level + 1);
  return list;
}
function leftSideView(root) {
  const list = [];
  const res = leftSideViewLogic(root, list, 0);
  return [...res];
}
function topView(root) {
  const queue = [];
  let queue_count = 0;
  let map = new Map();
  queue.push({ hd: 0, node: root });
  while (queue.length && queue_count < queue.length) {
    const top = queue[queue_count];
    if (!map.get(top.hd)) {
      map.set(top.hd, top.node.data);
    }
    if (top.node.left) {
      queue.push({ hd: top.hd - 1, node: top.node.left });
    }
    if (top.node.right) {
      queue.push({ hd: top.hd + 1, node: top.node.right });
    }
    queue_count++;
  }
  console.log(map);
  console.log(map.get(1));
  const res = [];
  map.forEach((_, key) => {
    res.push(map.get(key));
  });
  return res;
}
function main() {
  const tree = BuildTree(null);
  console.log(tree);
  const res = topView(tree);
  console.log("Result is...", res);
}

main();
