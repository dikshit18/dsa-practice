function smallDistinct(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const slidingWindow = map.size;
  let i = 0,
    j = slidingWindow;
  while (j <= str.length) {
    const subString = str.substring(i, j);
    let bool = true;
    map.forEach((value, keys) => {
      if (!subString.includes(keys)) {
        bool = false;
      }
    });
    if (!bool) {
      i++;
      j++;
    } else return subString;
  }
}
smallDistinct("CCCbAbbBbbC");
