const convertToCelsius = function(temp) {
  // Function for converting Farenheit to Celsius
  let farenheitTemp = (temp - 32) * (5/9)
  // Check if number is float or integer
  if (Number.isInteger(farenheitTemp)) {
    return farenheitTemp
  }
  else {
    // Rounding to 1 decimnal place
    farenheitTemp = parseFloat(farenheitTemp.toFixed(1))
    return farenheitTemp
  }
};

const convertToFahrenheit = function(temp) {
  // Function for converting celsius to farenheit
  let celsiusTemp = (temp * (9/5) + 32)
  // Check if number is float or integer
  if (Number.isInteger(celsiusTemp)) {
    return celsiusTemp
  }
  else {
    // Rounding to 1 decimnal place
    celsiusTemp = parseFloat(celsiusTemp.toFixed(1))
    return celsiusTemp
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
