function Solution(s, word1, word2) {
  const lookup = {};
  for (let i = 0; i < s.length; i++) {
    if (!lookup[s[i]]) {
      lookup[s[i]] = [i];
    } else {
      lookup[s[i]].push(i);
    }
  }
  const value1 = lookup[word1][lookup[word1].length - 1];
  const value2 = lookup[word2][lookup[word2].length - 1];
  return value2 - value1;
}

console.log(
  Solution(
    ["geeks", "for", "geeks", "contribute", "practice"],
    "geeks",
    "practice"
  )
);
