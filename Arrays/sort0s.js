function sort012(arr, N) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = 1;
    else map[arr[i]]++;
  }
  const returnArr = [];
  for (const iterator of Object.keys(map)) {
    for (let i = 0; i < map[iterator]; i++) {
      returnArr.push(parseInt(iterator));
    }
  }
  console.log(returnArr);
  return returnArr;
}
sort012([0, 2, 1, 2, 0]);
