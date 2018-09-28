// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // // MY SOLUTION #1:
  let conter = 1;
  while (conter<=n) {
    if(conter % 3 === 0 && conter % 5 === 0)
      console.log('fizzbuzz');
    else if(conter % 3 === 0)
      console.log('fizz');
    else if(conter % 5 === 0)
      console.log('buzz');
    else
      console.log(conter);
    conter++;
  }
  // console.log(n);
}

module.exports = fizzBuzz;
