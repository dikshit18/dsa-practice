function calculateNextSmallest(arr) {
  const stack = [-1];
  let answer = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    while (stack[stack.length - 1] !== -1 && stack[stack.length - 1] >= curr) {
      stack.pop();
    }
    answer[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return answer;
}
console.log(calculateNextSmallest([6, 2, 5, 4, 5, 1, 6]));
