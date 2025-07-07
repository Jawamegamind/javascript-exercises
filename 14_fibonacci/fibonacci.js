const fibonacci = function(num) {
    // Need to return essentially the specific num in the finbonacci sequence
    // Using prev and current to keep track of the sequence numbers
    prev = 1
    current = 1
    counter = 2 // Prev and current have the first two numbers
    // Possible that num is a string so convert to integer as a precaution
    num = parseInt(num)
    // Check if num is negative and if so return an error
    if (num < 0) {
        return "OOPS"
    }
    // Special cases
    if(num == 0) {
        // 0th fibonacci number is 0
        return 0
    }
    else if (num == 1) {
        return 1
    }
    else if (num == 2) {
        return 1
    }
    // Starting the for loop
    for(let i=0; i<num-2; i++) {
        let temp = prev + current
        // Update prev and current
        prev = current
        current = temp
        // Update the counter
        counter += 1
        console.log("Prev is", prev, "and current is",current, "and counter is", counter)

        // Check if counter is equal to num
        if (counter == num) {
            return current
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
