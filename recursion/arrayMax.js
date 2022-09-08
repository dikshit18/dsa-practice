const arr = [1, 3, 2, 10, 7, 6];

function main(arr, index, maxi) {
  if (index == arr.length) {
    return Number.MIN_VALUE;
  }
  maxi = main(arr, index + 1, maxi);
  maxi = Math.max(maxi, arr[index]);
  return maxi;
}
//console.log(main(arr, 0, Number.MIN_VALUE));
console.log(Math.max(undefined, 10));
