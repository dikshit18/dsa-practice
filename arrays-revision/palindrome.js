function palindrome(arr) {
  let answer = 0;
  for (let i = 0, j = n - 1; i < arr.length; i <= j) {
    if (arr[i] === arr[j]) {
      i++;
      j++;
    } else if (arr[i] > arr[j]) {
      i++;
      arr[i] += arr[i - 1];
      answer++;
    } else {
      j--;
      arr[j] += arr[j + 1];
      answer++;
    }
  }
  return answer;
}
