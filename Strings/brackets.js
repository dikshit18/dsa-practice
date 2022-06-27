function findIndex(str) {
  let openingBrackets = 0,
    closingBrackets = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") openingBrackets++;
    if (str[i] === ")") closingBrackets++;
    if (openingBrackets === closingBrackets) return i + 1;
  }
  if (openingBrackets === 0) {
    return str.length;
  }
  if (closingBrackets === 0) {
    return 1;
  }
}

console.log(findIndex("))))(()"));
