/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

function isPrime(num) {
  var counter;
  if (num === 0 || num === 1) {
    console.log(false);
  }
  for (var i = 1; i <= 12; i++) {
    if (num % i === 0) {
      counter += 0;
    } else {
      counter += 1;
    }
  }
  if (counter === 0){
    console.log(true);
  }
}
