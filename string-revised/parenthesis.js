function ispar(str) {
  if (str.length === 1) return false;
  let top = -1;
  const stack = new Array();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
      stack.push(str[i]);
      top++;
    } else if (str[i] === "]" && top >= 0) {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else stack.push(str[i]);
    } else if (str[i] === ")" && top >= 0) {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else stack.push(str[i]);
    } else if (str[i] === "}" && top >= 0) {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else stack.push(str[i]);
    } else {
      stack.push(str[i]);
    }
  }
  if (!stack.length) return true;
  else return false;
}
console.log(ispar("{}{(}))}"));
