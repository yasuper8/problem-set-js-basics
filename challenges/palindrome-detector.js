/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

// Using Array methods
function isPalindrome(input) {
  return (input.split('').reverse().join('') === input);
}

// Without Arrays
function isPalindrome(input) {
  var midpoint=parseInt(input.length/2);
  for (var i=0; i<midpoint; i++) {
    // Compare the first letter of the first half and the last letter of the second half
    // Walk towards the midpoint of the word, comparing each letter
    // (input.length-1) is the last letter of the word
    if (input[i] !== input[(input.length-1)-i]) {
      return false;
    }
  }
  // If the loop finishes comparing both halves of the word without returning false, it's a palindrome!
  // Return true.
  return true;
}
