function encryptString(S) {
  let lookup = {},
    res = "";

  for (let i = 0; i < S.length; i++) {
    if (!lookup[S[i]]) {
      lookup[S[i]] = 1;
    } else lookup[S[i]] = lookup[S[i]] + 1;
  }
  for (const [keys, values] of Object.entries(lookup)) {
    res += keys + values;
  }
  return res;
}

console.log(encryptString("abc"));
