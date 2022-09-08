let arr = [10, 2, 3, 4, 5, 7, 8];
let res = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    const diff = k - (arr[i] + arr[i]);
    let ans = this.two(arr, diff, old1, old2);
    ans.push(res);
  }
}
function two(arr, diff, old1, old2) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] == diff) return [i, j, old1, old2];
    else if (arr[i] + arr[j] < diff) {
      i++;
    } else {
      j--;
    }
  }
}
