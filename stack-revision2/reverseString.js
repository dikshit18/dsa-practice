function reverseString(str) {
  const stack = [];
  let str = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    stack.push(element);
  }
  for (let i = 0; i < stack.length; i++) {
    const element = stack.pop();
    str += element;
  }
  return str;
}
