function convertToRoman(n) {
  let romanString = "";
  while (n !== 0) {
    if (n >= 1000) {
      romanString += "M";
      n = n - 1000;
    } else if (n >= 500) {
      romanString += "D";
      n = n - 1000;
    } else if (n >= 100) {
      romanString += "C";
      n = n - 100;
    } else if (n >= 50) {
      romanString += "L";
      n = n - 50;
    } else if (n >= 10) {
      romanString += "X";
      n = n - 10;
    } else if (n >= 5) {
      romanString += "V";
      n = n - 5;
    } else if (n >= 1) {
      romanString += "I";
      n = n - 1;
    }
  }
  return romanString;
}

convertToRoman("3");
