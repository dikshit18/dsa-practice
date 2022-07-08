function negativeInt(arr, K) {
  const queue = require("./queue");
  let ans = [];
  for (let i = 0; i < K; i++) {
    if (arr[K] < 0) {
      queue.push(arr[K]);
    }
  }
  if (queue.currentSize) {
    ans.push(queue.pop());
  } else {
    ans.push(0);
  }
  for (let i = K; i < arr.element; i++) {
    if (i - queue.front() >= k) {
      queue.pop();
    }
    if (arr[i] < 0) {
      queue.push(i);
    }
    if (queue.currentSize) {
      ans.push(queue.pop());
    } else {
      ans.push(0);
    }
  }
  return ans;
}
console.log("=>", negativeInt(-8, 2, 3, -6, 10), 2);
