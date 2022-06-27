function overlap(arr) {
  arr = arr.sort((a, b) => a[0] - b[0]);

  let current = arr[0],
    resp = [current];
  for (let interval of arr) {
    const first = current[current.length - 1];
    if (first > interval[0]) {
      current[current.length - 1] = Math.max(
        current[current.length - 1],
        interval[interval.length - 1]
      );
      //resp.push(current);
    } else {
      current = interval;
      resp.push(current);
    }
  }
  return resp;
}
console.log(
  overlap([
    [1, 3],
    [2, 4],
    [6, 8],
    [9, 10],
  ])
);
