function trappingWater(arr, n) {
  const leftArray = [arr[0]],
    rightArray = [];
  for (let i = 1; i < arr.length; i++) {
    const res = Math.max(leftArray[i - 1], arr[i]);
    leftArray.push(res);
  }
  rightArray[n - 1] = [arr[n - 1]];
  for (let index = n - 2; index >= 0; index--) {
    const res = Math.max(rightArray[index + 1], arr[index]);
    rightArray[index] = res;
  }
  let answer = 0;
  for (let i = 0; i < leftArray.length; i++) {
    answer += Math.min(leftArray[i], rightArray[i]) - a[i];
  }
  return answer;
}
const res = trappingWater([8, 8, 2, 4, 5, 5, 1], 7);
console.log(res);
