// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let chars = {};
  for (const i of str) {
    if(!chars[i]){
      chars[char] = 1;
    }else{
      chars[i]++;
    }  
  }
  

}

module.exports = maxChar;
