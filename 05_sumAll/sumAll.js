const sumAll = function(start, end) {
    let totalSum = 0;
    let startNum = 0;
    let endNum = 0;
    if (typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }
    if(start > end) {
        endNum =  start;
        startNum = end;
    } else {
        startNum = start;
        endNum = end;
    }
    
    for (let i = startNum; i < endNum + 1; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
