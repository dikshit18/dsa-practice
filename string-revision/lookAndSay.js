function lookAndSay(n) {
  const first = "1";
  const second = "11";
  const third = "21";
  let nextElement = third;
  let result = "",
    count = 1;
  if (n === 1) return first;
  if (n === 2) return second;
  if (n === 3) return third;
  for (let i = 3; i < n; i++) {
    const element = nextElement[i];
    result = "";
    for (let j = 1; j <= nextElement.length; j++) {
      const element = nextElement[j];
      if (nextElement[j - 1] === nextElement[j]) {
        count++;
      } else {
        result += `${count}${nextElement[j - 1]}`;
        count = 1;
      }
    }
    nextElement = result;
  }
  return result;
}

console.log(lookAndSay(5));
