function countSubarrWithEqualZeroAndOne(arr, n) {
  let sum = 0,
    total = 0,
    frequency = { 0: 1 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) sum += 1;
    if (arr[i] === 0) sum -= 1;
    frequency[`${sum}`] = !frequency[`${sum}`] ? 1 : frequency[`${sum}`] + 1;
    total += frequency[`${sum}`] > 1 ? frequency[`${sum}`] - 1 : 0;
  }
  return total;
}

console.log(countSubarrWithEqualZeroAndOne([1, 1, 1, 1, 0]));
