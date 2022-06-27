function minJumps(arr, n) {
  let jumps = 0,
    i = 0;
  let sum = 0;
  while (i < n) {
    sum = arr[i];
    i += sum;
    jumps++;
  }
  return jumps;
}

minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11);
