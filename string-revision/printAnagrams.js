function printAnagrams(n, strings) {
  let map = new Map();
  const returnArr = [];
  for (let i = 0; i < strings.length; i++) {
    const element = strings[i];
    const sortedElement = [...strings[i]]
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (!map.get(sortedElement)) map.set(sortedElement, [element]);
    else {
      const value = map.get(sortedElement);
      value.push(element);
      map.set(sortedElement, value);
    }
  }
  strings = strings.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < strings.length; i++) {
    const sortedElement = [...strings[i]]
      .sort((a, b) => a.localeCompare(b))
      .join("");
    returnArr.push(map.get(sortedElement));
  }
  //   map.forEach((value, key) => {
  //     returnArr.push(value);
  //   });
  return returnArr;
}
console.log(printAnagrams(0, ["act", "god,", "cat", "dog", "tac"]));
