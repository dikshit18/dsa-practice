function postfix(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (
      element === "+" ||
      element === "-" ||
      element === "*" ||
      element === "/"
    ) {
      let res = 0;
      const element1 = stack[stack.length - 1];
      stack.pop();
      const element2 = stack[stack.length - 1];
      stack.pop();
      if (element === "+") res = element1 + element2;
      if (element === "*") res = element1 * element2;
      if (element === "/") res = element1 / element2;
      if (element === "-") res = element1 - element2;
      stack.push(res);
    } else {
      stack.push(res);
    }
  }
}
