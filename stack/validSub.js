function findMaxLen(arr) {
  let charStack = [],
    indexStack = [-1],
    counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      charStack.push(arr[i]);
      indexStack.push(i);
    } else {
      if (charStack[charStack.length - 1] === "(") {
        charStack.pop();
        indexStack.pop();

        const index = indexStack[indexStack.length - 1];
        counter = Math.max(counter, i - index);
      } else {
        //charStack.push(arr[i]);
        indexStack.push(i);
      }
    }
  }
  return counter;
}
console.log(findMaxLen("(()("));
