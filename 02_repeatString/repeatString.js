const repeatString = function (input, amount) {
  let userStatement = "";
  if (amount < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < amount; i++) {
      userStatement += input;
    }
    return userStatement;
  }
};
console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
