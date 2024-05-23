const palindromes = function (str) {
  let newStr = str.replaceAll(/\W/gi, '');
  newStr = newStr.toLowerCase();
  let midStr = Math.ceil(newStr.length / 2);
  for(let i = 0; i < midStr; i++) {
    let sec = newStr.length - 1 - i;
    if(newStr[i] !== newStr[sec]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
