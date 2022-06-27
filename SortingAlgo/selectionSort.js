function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        smallest = arr[i];
      }
    }
  }
  console.log(arr);
}
selectionSort([4, 1, 3, 10]);
