const convertToCelsius = function(temp) {
  return (Math.round(((temp-32)*(5/9))*10)/10)
};

const convertToFahrenheit = function(temp2) {
  return (Math.round((temp2 * (9/5) + 32) *10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
