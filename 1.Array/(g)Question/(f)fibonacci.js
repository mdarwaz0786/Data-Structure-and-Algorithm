// fibonacciSeries Program
function fibonacciSeries(number) {
  const fib = [0, 1];
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  };
  return fib;
};

const fibSeries = fibonacciSeries(10);
console.log(fibSeries);

// output:
// [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
