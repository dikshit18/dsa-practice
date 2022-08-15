const { Queue } = require("../Queue/queue");
function nonRepeating(str) {
  const map = new Map();
  const queue = new Queue();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else map.set(str[i], 1);

    if (map.get(str[i]) === 1) {
      queue.push(str[i]);
    }

    while (!queue.isEmpty()) {
      let top = queue.peek();
      if (map.get(top) !== 1) queue.pop();
      else break;
    }
    if (!queue.isEmpty()) {
      res += queue.peek();
    } else res += "#";
  }
  return res;
}

console.log(nonRepeating("zz"));
