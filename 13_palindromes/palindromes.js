const palindromes = function (str) {
    function remove(str) {
        let res = '';
        for (let i = 0; i < str.length; i++) {
            let character = str.charAt(i);
            if (!checkPunctuation(character)) {
                res += character;
            }
        }
        return res;
    }

    function checkPunctuation(char) {
        const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        return punctuation.includes(char);
    }

    // Remove puntuation and special characters from the string
    str = remove(str)
    // Remove whitespaces from the string
    str = str.replace(/\s/g, '');
    console.log("After whitespaces are removed ",str)
    // Convert the entire string to lowercase
    str = str.toLowerCase()
    console.log(str)

    // Reverse the string
    let reverseStr = ""
    for (let i=str.length-1; i>=0; i--) {
        reverseStr += str[i]
    }
    console.log(reverseStr)

    // Check if reverse if equal
    if (reverseStr == str) {
        return true
    }
    else {
        return false
    }

    // let left = 0
    // let right = str.length
    // console.log(left, right)

    // // Using a two pointer approach
    // while (left <= right) {
    //     // S
    //     // Compare the characters using the pointers
    //     if (str[left] == str[right]) {
    //         // Update the pointers
    //         console.log(str[left], str[right])
    //         left += 1
    //         right -= 1
    //     }
    //     else {
    //         return false
    //     }
    // }

    // // Outside the while loop so return true
    // return true
    // // Reverse the string
    // let reverseStr = str.reverse()
    // // Compare the string
    // if (str == reverseStr) {
    //     return true
    // }
    // else {
    //     return false
    // }
};

// Do not edit below this line
module.exports = palindromes;
