function negative(k, n, arr) {
  const queue = [];
  let queue_front = 0;
  const answer = [];
  for (let i = 0; i <= k; i++) {
    if (arr[i] < 0) queue.push(i);
  }
  console.log("=>", queue);
  if (queue[queue_front] > -1) {
    answer.push(arr[queue[queue_front]]);
  } else answer.push(0);

  for (let i = k; i < n; i++) {
    if (i - queue[queue_front] >= k) {
      queue[queue_front] = -1;
      queue_front++;
    }
    if (arr[i] < 0) {
      queue.push(i);
    }
    if (queue[queue_front] > -1) {
      answer.push(arr[queue[queue_front]]);
    } else answer.push(0);
  }
  return answer;
}
console.log(negative(3, 8, [12, -1, -7, 8, -15, 30, 16, 28]));
