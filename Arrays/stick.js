function stockBuySell(arr, n) {
  let minSoFar = arr[0];
  let i = 0;
  for (i = 1; i < arr.length; i++) {
    minSoFar = Math.min(arr[i], minSoFar);
  }
  let profit = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minSoFar < 0) continue;
    profit = Math.max(profit, arr[i] - minSoFar);
  }
  return [arr.indexOf(minSoFar), profit];
}
console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695]));
