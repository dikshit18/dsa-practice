const result = [];
const arr1 = [1, 4, 5, 6];
const arr2 = [2, 8, 9];
function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  //   if (arr1.length > arr2.length) {
  //     while (i < arr1.length) {
  //       if (arr1[i] > arr2[j]) {
  //         const temp = arr1[i];
  //         arr1[i] = arr2[j];
  //         arr2[j] = temp;
  //         arr2.sort((a, b) => a - b);
  //         i++;
  //         //j++;
  //       } else i++;
  //     }
  //   } else {
  while (i < arr2.length) {
    if (arr2[i] > arr1[j]) {
      const temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
      arr1.sort((a, b) => a - b);
      i++;
      //j++;
    } else i++;
  }
}
