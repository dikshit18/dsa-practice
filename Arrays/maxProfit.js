function maxProfit(arr, n, k) {
  let profit = 0,
    i = 0;
  while (k) {
    let buy = arr[i];
    let sell = 0;
    for (; i < arr.length; i++) {
      buy = Math.min(buy, arr[i]);
      sell = Math.max(sell, arr[i]);
      if (arr[i + 1] < arr[i]) {
        profit += sell - buy;
        i++;
        break;
      }
    }
    k--;
  }
  console.log(profit);
}
maxProfit([10, 22, 5, 75, 65, 80], 6, 2);
