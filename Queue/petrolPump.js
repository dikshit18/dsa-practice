const { Queue } = require("./queue");
const queue = new Queue();
function tour(p, n) {
  let carry = 0;
  let balance = 0;
  for (let i = 0; i < p.length; i++) {
    balance = p[i] - n[i];
    carry += balance;
    if (carry < 0) {
      i = i + 1;
      balance = 0;
    }
  }
  return carry;
}
