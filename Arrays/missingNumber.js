function missingNumber(arr, n) {
  //your code here
  let integer;
  if (n === 1) {
    return arr[0] + 1;
  }
  const sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] >= 0) {
      while (sortedArray[i + 1] === sortedArray[i] + 1) {
        integer = sortedArray[i];
        i++;
      }
    }
  }
  return integer + 2;
}
const res = missingNumber([28, 7, -36, 21, -21, -50, 9, -32]);
console.log(res);
