function validSubstring(str) {
  let charArray = [],
    intArray = [],
    result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      charArray.push(str[i]);
      intArray.push(str[i]);
    } else {
      if (str[str.length - 1] === "(") {
        intArray.pop();
        charArray.pop();
        const index = str[str.length - 1];
        result = Math.max(result, i - index);
      } else {
        intArray.push(str[i]);
      }
    }
  }
  return result;
}
