const sumAll = function() {
    const num1 = arguments[0]
    const num2 = arguments[1]
    if (typeof num1!="number" || typeof num2!="number" || num1<0 || num2<0) {
        return "ERROR";
    }
    if (num1 >= num2) {
        let sum = 0;
        for (i=num2; i<=num1; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        let sum = 0;
        for (i=num1; i<=num2; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
