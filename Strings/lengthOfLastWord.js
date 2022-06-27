function lengthOfLastWord(A) {
  const array = A.split(" ");
  console.log(array);
  const leng = array.length;
  if (!leng) {
    return 0;
  } else {
    return array[array.length - 1].length;
  }
}
const res = lengthOfLastWord("d");
console.log(res);
