const reverseString = function(string) {
 // Need to essentially reverse the given string
 let reversedString = ""
 // Running the for loop in reverse
 for(let i=string.length-1; i>=0; i--) {
    // Simply append the characters in revese
    reversedString += string[i]
 }
 console.log("The reversed string is", reversedString)
 return reversedString
};

// Do not edit below this line
module.exports = reverseString;
