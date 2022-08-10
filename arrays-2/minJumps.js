function min(arr) {
  let jumps = 0;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const curr = i;
    i += elem;
    jumps++;
    if (curr + i >= n) return jumps;
  }
}
