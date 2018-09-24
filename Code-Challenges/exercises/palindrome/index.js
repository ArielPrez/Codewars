// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  // // // MY SOLUTION:
  let wordReversed = str.split('').reduce((wordRev, char)=>char+wordRev,'');
  if(wordReversed === str)
    return true;
  else
    return false;

  // // // SOLUTION #1:
  // const reversed = str.split('').reverse().join('');
  // return str === reversed;

  // // // SOLUTION #2 - USING THE METHOD "EVERY":
  // return str.split('').every((char, i)=>{
  //   return char === str[str.length - i - 1];
  // });

}


module.exports = palindrome;
