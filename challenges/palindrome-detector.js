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
function palindrome(str) {
  var reversedStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if(reversedStr === str) {
    console.log(true);
  } else {
    console.log(false);
  }
}
