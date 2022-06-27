function firstNonRepeating(arr, n) {
  const lookUp = {};
  for (let i = 0; i < arr.length; i++) {
    if (!lookUp[arr[i]]) lookUp[arr[i]] = [i];
    else lookUp[arr[i]].push(i);
  }
  let smallest = n,
    noElements = true;
  console.log(lookUp);
  for (const obj of Object.keys(lookUp)) {
    if (lookUp[obj].length === 1) {
      if (lookUp[obj][0] <= smallest) {
        smallest = lookUp[obj][0];
        noElements = false;
        //break;
      }
    }
  }
  if (noElements) return -1;
  else return arr[smallest];
}

console.log(
  firstNonRepeating(
    [
      -1, -17, -12, 8, 16, -17, -13, -14, -3, -6, -5, -11, -10, -12, -5, 19,
      -17, -5, -1, 12,
    ],
    20
  )
);
