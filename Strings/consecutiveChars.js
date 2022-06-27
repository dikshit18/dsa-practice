function chars(A, B) {
  const arr = Array.from(A);
  let keeper = {};
  for (let i = 0; i < arr.length; i++) {
    if (!keeper[arr[i]]) {
      keeper[arr[i]] = 1;
    } else keeper[arr[i]] = keeper[arr[i]] + 1;
  }
  let checkForward = false;
  for (const obj of Object.keys(keeper)) {
    if (keeper[obj] === B) {
      delete keeper[obj];
      checkForward = true;
    } else checkForward = false;
  }
}
