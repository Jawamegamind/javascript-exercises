const sumAll = function(num1, num2) {
    // Return sum between the two numbers
    let sum = 0
    // Need to check if any of the numbers is negative
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    // Need to check if any argumnent is not an integer
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    // Need to check which numbers is larger for proper loop
    if (num1 > num2) {
        for(let i=num2; i<=num1; i++) {
            sum += i
        }
    }
    else if (num2 > num1) {
        for(let i=num1; i<=num2; i++) {
            sum += i
        }
    }
    console.log("The sum is", sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
