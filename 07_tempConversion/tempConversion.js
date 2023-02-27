const convertToCelsius = function (fah) {
  return Math.round(((fah - 32) * 5) / 9);
};

const convertToFahrenheit = function (cel) {
  return Math.round((cel * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
