const reverseString = function(input) {
    let reverseInput = '';
    for (let i = input.length -1    ; i >= 0; i--) {
        reverseInput += input[i];
    }
    return reverseInput;
};
reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
