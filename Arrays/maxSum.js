function max_sum(a, n) {
  let greatestElem = 0,
    greatestElemIndex = 0,
    sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > greatestElem) {
      greatestElem = a[i];
      greatestElemIndex = i;
    }
  }
  while (greatestElemIndex < a.length - 1) {
    let temp = a[greatestElemIndex + 1];
    a[greatestElemIndex + 1] = a[greatestElemIndex];
    a[greatestElemIndex] = temp;
    greatestElemIndex++;
  }
  for (let i = 0; i < a.length; i++) {
    sum += i * a[i];
  }
  console.log(a);
}
max_sum([887, 778, 916, 794, 336]);
