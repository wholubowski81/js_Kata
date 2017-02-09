// Description:
//
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
var arr = str.split(" ");
var lenArr = arr.length;
var solution = '',
    tempStr = '';

for(var i = 0; i<lenArr; i++){
    tempStr = arr.slice(i,i+1);
    tempStr = tempStr.toString();
    var lenStr = tempStr.length;
    solution += tempStr.slice(1,lenStr) + tempStr.charAt(0) + 'ay ';
    console.log(solution);
    }

return solution.slice(0,-1);
}

// function pigIt(str){
//   return str.split(' ').map(function(el){
//     return el.slice(1) + el.slice(0,1) + 'ay';
//   }).join(' ');
// }
