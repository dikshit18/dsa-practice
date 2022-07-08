function minSwaps(str) {
  let open = 0,
    close = 0,
    swaps = 0,
    unbalanced = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      open++;
      if (unbalanced) {
        swaps += unbalanced;
        unbalanced--;
      }
    } else {
      close++;
      unbalanced = close - open;
    }
  }
  return swaps;
}
