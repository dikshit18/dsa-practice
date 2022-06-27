//Reverse a string
function reverseWord(str) {
  const newArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    newArr.push(element);
  }
  return newArr.join("");
}
console.log(reverseWord("Hello"));
