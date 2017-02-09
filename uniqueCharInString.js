// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").

function firstNonRepeatingLetter(s) {

  let str = s.toLowerCase();
  let len = s.length;

  for(i = 0; i<len; i++){
    if(str.indexOf(str.charAt(i),i+1)==-1){
      return s.charAt(i);
    }
    else {str +=str.charAt(i);}
  }
  return str="";
}

// function firstNonRepeatingLetter(s) {
//   for(var i in s) {
//     if(s.match(new RegExp(s[i],"gi")).length === 1) {
//       return s[i];
//     }
//   }
//   return '';
// }
