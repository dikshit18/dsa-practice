function isShuffledSubstring(A, B) {
  var n = A.length;
  var m = B.length;

  // Return false if length of
  // string A is greater than
  // length of string B
  if (n > m) {
    return false;
  } else {
    // Sort string A
    A = A.split("").sort().join("");

    // Traverse string B
    for (var i = 0; i < m; i++) {
      // Return false if (i+n-1 >= m)
      // doesn't satisfy
      if (i + n - 1 >= m) return false;

      // Initialise the new string
      var str = [];

      // Copy the characters of
      // string B in str till
      // length n
      for (var j = 0; j < n; j++) str.push(B[i + j]);

      // Sort the string str
      str = str.sort();

      // Return true if sorted
      // string of "str" & sorted
      // string of "A" are equal
      if (str.join("") == A) return true;
    }
  }
}
console.log(isShuffledSubstring("geekforgeeks1", "ekegorfkeegsgeek"));
