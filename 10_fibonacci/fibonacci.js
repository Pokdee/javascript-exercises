const fibonacci = function (times) {
  let num = [];

  for (let i = 0; i < times; i++) {
    console.log(i);
    let fNum = num[i - 2] ? num[i - 2] : 0;
    let sNum = num[i - 1] ? num[i - 1] : 1;
    num.push(fNum + sNum);
  }
  return num[times - 1];
};

// Do not edit below this line
module.exports = fibonacci;
