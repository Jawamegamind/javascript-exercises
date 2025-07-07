const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	// Use the reduce function
  return arr.reduce((prev, current) => prev + current, 0)
};

const multiply = function(arr) {
  // Using reduce since input is an array
  return arr.reduce((prev, current) => prev * current, 1)
};

const power = function(num, power) {
	// Need to raise num to the power
  let ans = 1
  // Use a for loop for multiplication
  for(let i=0; i<power; i++) {
    ans = ans * num
  }
  return ans
};

const factorial = function(num) {
  let ans = 1
	// Using a for loop for calculating the factorial
  for (let i=num; i>0 ; i--) {
    ans = ans * i
  }
  return ans
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
