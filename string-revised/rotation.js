function areRotations(s1, s2) {
  let newString = s1 + s1;
  return newString.includes(s2);
}
