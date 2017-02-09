// wykrywa róznicę w ciągu liczb parzystych lub nieparzystych
function iqTest(numbers){
var arrNumbers = numbers.split(' ');

var even = 0, odd = 0, flagEven = 0, flagOdd = 0,
    len = arrNumbers.length;

for(var i =0; i<len; i++){
  if(arrNumbers[i]%2 == 0){
  even++;
  flagEven = i+1;
  }
  else {
  odd++;
  flagOdd = i+1;
  }

      if(even>=2 && odd>0){
      return flagOdd;
      }
      else if (odd>=2 && even>0){
      return flagEven;
      }

  }
