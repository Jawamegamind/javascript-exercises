const repeatString = function(string, num) {
    // Need to essentially repeat the string num times
    // First check for negative numbers as well
    if (num < 0) {
        return "ERROR"
    }
    let finalString = ""
    for(let i=0; i<num; i++) {
        finalString += string
    }
    console.log("The repeated string is", finalString)
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
