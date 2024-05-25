const fibonacci = function(n) {
  let num = +n;
  if(n == 0 || n == 1) return num;
  if(n < 0) return 'OOPS';
  let fibArr = [0, 1];
  for(let i = 2; i <= num; i++) {
    let fib = fibArr[i-1] + fibArr[i-2];
    if(i === num) return fib;
    fibArr.push(fib);
  }
};

// Do not edit below this line
module.exports = fibonacci;
