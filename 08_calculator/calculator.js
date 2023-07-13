const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((total, current) => total + current, 0);
};

const multiply = function(...args) {
  let sum = 1;
  for (let arg of args) {
    sum *= arg;
  }
  return sum;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if (a == 0) return 1;

  let sum = 1;
  for (let i = a; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
