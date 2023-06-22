const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(...args) {
  prod = 1;
  for (const num of args) {
    prod = prod * num;
  }
  return prod;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  prod = 1
	for (i=1; i<=num; i++) {
    prod = prod * i;
  }
  return prod;
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
