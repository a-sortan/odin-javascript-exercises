const removeFromArray = function(arr, ...rest) {
  return arr.filter(elem => rest.indexOf(elem) === -1)
};

// Do not edit below this line
module.exports = removeFromArray;
