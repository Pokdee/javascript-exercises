const palindromes = function (str) {
  const reg = /\W/g;
  const newStr = str.toUpperCase().replaceAll(reg, "");
  const num =
    newStr.length % 2 === 0 ? newStr.length / 2 : (newStr.length - 1) / 2 + 1;
  let palin;
  for (let i = 0; i < num; i++) {
    if ((newStr[i], "=>", newStr[num - 1 - i])) {
      palin = true;
    } else {
      palin = false;
    }
  }
  return palin;
};

// Do not edit below this line
module.exports = palindromes;
