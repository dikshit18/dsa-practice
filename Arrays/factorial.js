function factorial(N) {
  let result = 1;
  while (N > 0) {
    result *= N;
    N--;
  }
  return result;
}
console.log(factorial(5));
