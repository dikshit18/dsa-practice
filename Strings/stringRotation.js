function isRotated(str1, str2) {
  const clockWise =
    str1.substring(str1.length, str1.length - 2) +
    str1.substring(0, str1.length - 2);
  const antiClockWise = str1.substring(2, str1.length) + str1.substring(0, 2);
  console.log(antiClockWise);
  console.log(clockWise);
  return str1 === clockWise || str2 === antiClockWise;
}
const res = isRotated("fsbcnuvqhffbsaqxwp", "wpfsbcnuvqhffbsaqx");
console.log(res);
