function findLongestConseqSubseq(arr, N) {
  const elements = new Set();
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    elements.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!elements.has(arr[i] - 1)) {
      let j = arr[i];
      while (elements.has(j)) {
        j++;
      }
      answer = Math.max(answer, j - arr[i]);
    }
  }
  return answer;
}

findLongestConseqSubseq([2, 6, 1, 9, 4, 5, 3]);
