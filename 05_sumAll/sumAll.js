const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

    let lowBound = Math.min(num1, num2);
    let highBound = Math.max(num1, num2);

    if (lowBound < 0 || highBound < 0) {
        return "ERROR";
    }

    let finalSum = 0;

    for (let i = lowBound; i <= highBound; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
