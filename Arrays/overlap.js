function merge(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let response = [];
  let currentInterval = intervals[0];
  response.push(currentInterval);
  for (let interval of intervals) {
    let current_end = currentInterval[currentInterval.length - 1];
    let next_begin = interval[0];
    let next_end = interval[interval.length - 1];
    if (current_end > next_begin) {
      currentInterval[currentInterval.length - 1] = Math.max(
        current_end,
        next_end
      );
    } else {
      currentInterval = interval;
      response.push(currentInterval);
    }
  }
  return response;
}
console.log(
  merge([
    [6, 8],
    [1, 9],
    [2, 4],
    [4, 7],
  ])
);
