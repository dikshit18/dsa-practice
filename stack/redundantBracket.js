function redundant(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] = "(") ||
      (str[i] = "+") ||
      (str[i] = "-") ||
      (str[i] = "*") ||
      (str[i] = "/")
    ) {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (
        stack[stack.length - 1] === "+" ||
        stack[stack.length - 1] === "-" ||
        stack[stack.length - 1] === "*" ||
        stack[stack.length - 1] === "/"
      ) {
        stack.pop();
      }
    }
  }
}
