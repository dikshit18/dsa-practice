function minFlips(str) {
  let expectedNext = Math.abs(str[str.length - 1] - 1),
    swap = 0;
  for (let i = str.length - 2; i >= 0; i--) {
    const element = Number(str[i]);
    if (element !== expectedNext) {
      swap++;
      expectedNext = Math.abs(expectedNext - 1);
    } else {
      expectedNext = Math.abs(expectedNext - 1);
    }
  }
  return swap;
}
console.log(minFlips("01001001101"));
