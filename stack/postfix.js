function postfix(str) {
  const stack = [];
  let result;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
      const num2 = Number(stack.pop());
      const num1 = Number(stack.pop());
      if (str[i] === "+") {
        result = num1 + num2;
      } else if (str[i] === "-") {
        result = num1 - num2;
      } else if (str[i] === "/") {
        result = Math.floor(num1 / num2);
      } else {
        result = num1 * num2;
      }
      stack.push(result);
    } else {
      stack.push(str[i]);
    }
  }
  return stack[stack.length - 1] === -0 ? 0 : stack[stack.length - 1];
}
console.log(postfix("18-6*3-8+88-*"));
