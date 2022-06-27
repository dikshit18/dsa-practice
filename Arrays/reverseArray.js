const readline = require("readline-sync");
const testCases = readline.question();
for (let i = 0; i < testCases; i++) {
  const arraySize = readline.question();
  let number = [];
  for (let i = 0; i < arraySize; ++i) {
    number.push(Number(readline.question()));
  }
  console.log("=>", number);
  let reversedNumber = [];
  for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber.push(number[i]);
  }
  console.log(reversedNumber);
}
