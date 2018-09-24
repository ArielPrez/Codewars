// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse("abcdef");

function reverse ( str )
{
  /*jshint -W087 */
  debugger;

  // // SOLUTION #1 built in reverse method:
  // let array = str.split('');
  // array.reverse();
  // return array.join('');
  // // OR this one
  // return str.split('').reverse().join('');

  // // SOLUTION #2 :
  // let reversed = "";
  // for (const i of str) {
  //   reversed = i + reversed;
  //   debugger;
  // }
  // return reversed;

  // // SOLUTION #3 :
  // return str.split('').reduce((reversed, c) => {
  //   return c + reversed;
  // },'');
  // str.splt('').reduce((rev, char) => char + rev, '');

}


module.exports = reverse;





















  // // Solution #1 built in reverse method:
  // // return [ ...str ].reverse().join( '' );

  // //Solution #2 for loop new syntax
  // let newStr = '';
  // for ( let letter of str )
  // {
  //   newStr = letter + newStr;
  // }
  // return newStr;

  // // Solution #3 array iterator
  // // const newStr = [];
  // // [...str].forEach(element =>
  // // { 
  // //   newStr.unshift( element );
  // // });
  // // return newStr.join('');