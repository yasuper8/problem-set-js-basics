/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

function isPrime(num) {
  // Start your loop at 2, since all integers will be divisible by 1 and you can't divide by 0
  for (var i=2; i<num; i++) {
    if (num % i === 0) {
      // If num is divisble by any value of i, it is not prime
      // Return false and stop checking if this condition is met
      return false;
    }
  }
  // If the loop completes without returning false, return true. That number is prime!
  return true;
}

function primes(max) {
  var primesArray = [];
  // Start looping at 2, since 0 and 1 aren't primes
  for (var i=2; i<max; i++) {
    if (isPrime(i)) {
      primesArray.push(i);
    }
  }
  // Return the array containing all of the prime numbers less than the max
  return primesArray;
}
