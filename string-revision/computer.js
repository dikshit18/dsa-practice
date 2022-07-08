function noComputer(n, seq) {
  let map = new Map();
  let unAttended = 0;
  for (let i = 0; i < seq.length; i++) {
    const element = seq[i];
    if (map.has(element)) {
      //Decrease count
      map.set(element, 0);
    } else {
      //check total count
      let sum = 0;
      map.forEach((value, key) => {
        sum += value;
      });
      if (sum < n) {
        map.set(element, 1);
      } else {
        unAttended++;
      }
    }
  }
  return !unAttended ? 0 : unAttended / 2;
}
console.log(noComputer(1, "ABCBCADEED"));
