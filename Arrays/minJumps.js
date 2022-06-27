function minJumps(arr, n) {
  let jumps = 0;
  for (let i = 0; i < arr.length; ) {
    const value = arr[i];
    const currentPos = i;
    i += value;
    jumps++;
    if (currentPos + i >= n) {
      return jumps;
    }
  }
  return -1;
}
console.log(minJumps([1, 4, 3, 2, 6, 7], 6));
