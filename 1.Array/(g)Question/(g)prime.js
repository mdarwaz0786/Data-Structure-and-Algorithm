// prime number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const number = 13;
console.log(`${number} is ${isPrime(number) ? "a prime number." : "not a prime number."}`);
