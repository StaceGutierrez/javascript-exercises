const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let totalSum = arr.reduce((temp, currentVal) => temp + currentVal,0);
  return totalSum
};

const multiply = function(arr) {
  let product = arr.reduce((accumulator, currentValue) => accumulator * currentValue)
  return product
};

const power = function(a, b) {
	return Math.pow(a , b);
};

const factorial = function(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return (n * factorial(n - 1))
  }
	
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
