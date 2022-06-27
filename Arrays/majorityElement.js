function majorityElement(a, size) {
  const occurances = size / 2;
  const map = {};
  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = 1;
    } else map[a[i]] = map[a[i]] + 1;
  }
  let output;
  for (const keys of Object.keys(map)) {
    if (occurances < map[keys]) {
      output = keys;
    }
  }
  return output || -1;
}
const res = majorityElement([1, 13], 2);
console.log(res);
