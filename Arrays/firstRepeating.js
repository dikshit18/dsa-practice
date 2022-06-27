function firstRepeated(arr, n) {
  const lookUp = {};
  for (let i = 0; i < arr.length; i++) {
    if (!lookUp[arr[i]]) lookUp[arr[i]] = [i];
    else lookUp[arr[i]].push(i);
  }
  let smallest = n,
    noElements = true;
  console.log(lookUp);
  for (const obj of Object.keys(lookUp)) {
    if (lookUp[obj].length > 1) {
      if (lookUp[obj][0] <= smallest) {
        smallest = lookUp[obj][0];
        noElements = false;
        break;
      }
    }
  }
  if (noElements) return -1;
  else return smallest;
}

console.log(firstRepeated([7, 4, 0, 9, 4, 8, 8, 2, 4, 5, 5, 1], 12));
