const removeFromArray = function(arr, ...toRemove) {
    // Need to essentially remove the toReomve element from the array
    console.log(toRemove)
    // Loop over the toRemove numbers
    for (let num of toRemove) {
        console.log("Num to remove is", num)
        for(let i=0; i<arr.length; i++) {
        // Check if the current element is the one that we remove
        if (arr[i] === num) {
            // Remove this element from array using splice
            arr.splice(i,1)
            // Need to decrement i so that loop remains in bounds
            i = i - 1
        }
        else {
            continue
        }
    }
    }

    // Return the final array
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
