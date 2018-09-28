// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd");// === "c"
// maxChar("apple 1231111");// === "1"

function maxChar(str){

  // // MySolution #1:
  let aux = 0,maxNum = 0, char='';
  console.log(str+' <====str');
  for (const elem of str) {
    // console.log(elem +' <====elem');
    for (const i of str) {
      if (i === elem){
        aux++;
      }
    }
    if(aux > maxNum){
      maxNum = aux;
      char = elem;
      aux = 0;
    }
  }
  // console.log(aux+' <====aux');
  console.log(char+' <====char');
  return char;
  
  // // SOLUTION #1:
  // let chars = {};
  // let max = 0;
  // let char = '';

  // for (const i of str) {
  //   if(!chars[i]){
  //     chars[i] = 1;
  //   }else{
  //     chars[i]++;
  //   }  
  // }
  // for (const i in chars) {
  //   if(chars[i]>max){
  //     max = chars[i];
  //     char = i;
  //   }
  // }
  // return char;

}

module.exports = maxChar;
