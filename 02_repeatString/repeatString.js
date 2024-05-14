const repeatString = function(str, numberOfREpeats) {
  if(numberOfREpeats < 0) {
    return "ERROR";
  }
  let res = '';
  for (let i = 0; i < numberOfREpeats; i++) {
    res += str;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
