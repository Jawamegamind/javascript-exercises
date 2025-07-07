const findTheOldest = function(people) {
    // Need to find the oldest person
    // Using sort function for sorting the object based on age
    let sortedPeople = people.sort((a, b) => {
        // Check if yearOfDeath is missing for any person
        if (!a.yearOfDeath) {
            // Add the yearOfDeath using Javascript's Date function
            a.yearOfDeath = new Date().getFullYear()
        }
        if (!b.yearOfDeath) {
            // Add the yearOfDeath using Javascript's Date function
            b.yearOfDeath = new Date().getFullYear()
        }

        let age1 = a.yearOfDeath - a.yearOfBirth
        let age2 = b.yearOfDeath - b.yearOfBirth

        // Now compare
        if (age1 < age2) {
            return 1
        }
        else {
            return -1
        }
    })

    console.log(sortedPeople)

    // Not return the first person in the array
    console.log(sortedPeople[0].name)
    return (sortedPeople[0])
};

// Do not edit below this line
module.exports = findTheOldest;
