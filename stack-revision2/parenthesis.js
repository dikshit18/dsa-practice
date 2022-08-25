function parenthesis(str) {
  if (str.length === 1) return false;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "[" || element === "(" || element === "{")
      stack.push(element);
    else {
      if (element === "]" && stack.length > 0) {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else stack.push(element);
      } else if (element === "}" && stack.length > 0) {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else stack.push(element);
      } else if (element === "(" && stack.length > 0) {
        if (stack[stack.length - 1] === ")") {
          stack.pop();
        } else stack.push(element);
      } else {
        stack.push(element);
      }
    }
  }
  return stack.length ? false : true;
}
