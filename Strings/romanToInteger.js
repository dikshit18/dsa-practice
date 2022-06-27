function romanToDecimal(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (lookUpFunction(str[i]) < lookUpFunction(str[i + 1])) {
      sum += lookUpFunction(str[i + 1]) - lookUpFunction(str[i]);
      i++;
    } else {
      sum += lookUpFunction(str[i]);
    }
  }
  return sum;
}
function lookUpFunction(str) {
  let answer;
  switch (str) {
    case "I":
      answer = 1;
      break;
    case "V":
      answer = 5;
      break;
    case "X":
      answer = 10;
      break;
    case "L":
      answer = 50;
      break;
    case "C":
      answer = 100;
      break;
    case "D":
      answer = 500;
      break;
    case "M":
      answer = 1000;
      break;
    default:
      break;
  }
  return answer;
}
console.log(romanToDecimal("CMXVI"));
