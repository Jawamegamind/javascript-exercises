const leapYears = function(year) {
    // Need to check if the passed year is a leap year or not
    if (year%4 == 0) {
        // Now remaining conditions
        if (year%100 == 0) {
            // Divisible by 100 so need to check the 400 condition
            if (year%400 == 0) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return true
        }
    }
    else {
        // Year is not a leap year
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
