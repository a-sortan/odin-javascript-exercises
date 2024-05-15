const sumAll = function(firstNum, secondNum) {
  if(firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
    return "ERROR";
  }
  let sum = 0;
  let [min, max] = [firstNum, secondNum];
  if(firstNum > secondNum) {
    [min, max] = [secondNum, firstNum];
  }
  for(let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
