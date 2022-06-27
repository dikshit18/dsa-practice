function isdivisible7(num) {
  let remainder = 0;
  for (let i = 0; i < num.length; i++) {
    if (Number(remainder + num[i]) % 7 === 0) {
      i++;
      if (i === num.length - 1) {
        return 1;
      }
    } else {
      remainder = num[i] % 7;
    }
  }
  return 0;
}
console.log(isdivisible7("1000"));
