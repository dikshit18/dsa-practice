function palindrome(str) {
  str = str.toLowerCase().replace(/\W+/g, "");
  const array = Array.from(str);
  let i = 0,
    j = array.length - 1;
  while (i < j) {
    if (array[i] !== array[j]) {
      return 0;
    }
    i++;
    j--;
  }
  return 1;
}

const res = palindrome("race a car");
console.log(res);
