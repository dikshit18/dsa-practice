function reverseWord(str) {
  console.log(str[0]);
  let start = 0,
    end = str.length - 1;
  while (start !== end) {
    str = swap(str, start, end);
    start++;
    end--;
  }
  console.log(str);
}

function swap(str, i, j) {
  let ch = str.split("");
  let temp = ch[i];
  ch[i] = ch[j];
  ch[j] = temp;
  return ch.join("");
}
reverseWord("Hello");
