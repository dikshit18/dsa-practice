function longestSubsequence(arr) {
  arr = arr.sort((a, b) => a - b);
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  let currCount = 0,
    maxCount = 0;
  for (const value of set.values()) {
    if (set.has(value) && set.has(value + 1)) {
      currCount += 1;
      maxCount = Math.max(maxCount, currCount);
    } else currCount = 0;

    //currCount = 0;
  }
  return maxCount + 1;
}
console.log(longestSubsequence([1, 9, 3, 10, 4, 20, 2]));
