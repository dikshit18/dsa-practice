function minSwap(arr, k) {
  let fav = 0,
    nonFav = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      fav++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      nonFav++;
    }
  }
  let left = 0,
    right = fav - 1,
    result = Number.MAX_SAFE_INTEGER;
  while (left < right) {
    result = Math.min(result, nonFav);
    right++;
    if (arr[right] > k && right < arr.length) nonFav++;
    if (arr[left] > k && left < n) nonFav--;
    l++;
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
