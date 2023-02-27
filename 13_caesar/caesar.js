const caesar = function (str, shift) {
  const strNum = Array.from(str).map((e) => e.charCodeAt());
  for (let i = 0; i < strNum.length; i++) {
    //cap
    if (strNum[i] >= 65 && strNum[i] <= 90) {
      strNum[i] = strNum[i] + shift;
      if (strNum[i] > 90) {
        strNum[i] = strNum[i] - 90 + 64;
      }
      if (strNum[i] < 65) {
        strNum[i] = strNum[i] + 90 - 64;
      }
    }
    //small
    if (strNum[i] >= 97 && strNum[i] <= 122) {
      strNum[i] = strNum[i] + shift;
      if (strNum[i] > 122) {
        strNum[i] = strNum[i] - 122 + 96;
      }
      if (strNum[i] < 97) {
        strNum[i] = strNum[i] + 122 - 96;
      }
    }
  }
  return strNum.map((e) => String.fromCharCode(e)).join("");
};

// Do not edit below this line
module.exports = caesar;
