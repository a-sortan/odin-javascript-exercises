const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  if(num === 0) return 1;
  let res = 1;
  for(let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
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
