let range = [
  [5, 7],
  [6, 8],
  [3, 6],
  [10, 11],
  [15, 15],
];
range.sort((a, b) => a[0] - b[0]);
console.log(range);
let current = range[0];
let stack = [current];
for (let i = 1; i <= range.length - 1; i++) {
  const curr_start = current[0];
  const curr_end = current[current.length - 1];
  console.log("Range[i]", range[i]);
  const next_start = range[i][0];
  const next_end = range[i][range[i].length - 1];
  if (curr_end >= next_start) {
    let item = [curr_start, Math.max(curr_end, next_end)];
    stack.pop();
    stack.push(item);
  } else {
    current = range[i];
    stack.push(current);
  }
}
console.log(stack);
