const convertToCelsius = function(inputNum) {
  let outputNum = (inputNum - 32) * 5/9; 
  return parseFloat(outputNum.toFixed(1));
};

const convertToFahrenheit = function(inputNum) {
  let outputNum = (inputNum * 9/5 + 32); 
  return parseFloat(outputNum.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
