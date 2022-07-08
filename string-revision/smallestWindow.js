function smallest(str, pattern) {
  const patternMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const element = pattern[i];
    if (patternMap.has(element)) {
      patternMap.set(element, patternMap.has(element) + 1);
    } else patternMap.set(element, 1);
  }
  let j = 0,
    sum = 0,
    result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (patternMap.has(str[i])) {
      patternMap.set(
        element,
        patternMap.has(element) === 0 ? 0 : patternMap.has(element) - 1
      );
    }
    sum = 0;
    patternMap.forEach((value) => {
      sum += value;
    });
    if (sum === 0) {
      result = Math.min(result, i - j);
      sum = 0;
      j = i;
    }
  }
}
smallest("timetopractice", "toc");
