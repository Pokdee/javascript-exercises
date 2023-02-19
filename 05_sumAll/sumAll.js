const sumAll = function (num1, num2) {
  let result = 0;
  for (let i = 0; i < num2 + 1; i++) {
    result = i + result;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
