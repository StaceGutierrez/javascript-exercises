const convertToCelsius = function(f) {
  let celsius = ((5/9) * (f-32) * 10);
    return Math.round(celsius) / 10;
  
};

const convertToFahrenheit = function(c) {
  let farhrenheit = (((c * 1.8) + 32)) *10;
    return Math.round(farhrenheit) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
