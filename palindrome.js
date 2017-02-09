//Manchester algoritm
// Finding the longest substring which is palindrome and return his lenght
//http://algs4.cs.princeton.edu/53substring/Manacher.java.html
//http://articles.leetcode.com/longest-palindromic-substring-part-ii

function transformate(s){
var tString = '',
    len = s.length;

tString = s.split('');
tString.unshift('$');

for(var i = 0; i<=len; i++){
    tString[i] += '#';
    }
tString.push('@');
tString = tString.join('');
return tString;
}


longestPalindrome=function(s){
  var tString = transformate(s);
  var lenT = tString.length;
  var p = [], //array of all palidromes
      center = 0,
      right = 0;

  for (var i = 1; i < lenT-1; i++) {
    p[i] = 0;
    var mirror = 2*center-i;
        if (right > i){
          p[i] = Math.min(right-i, p[mirror]);
        }
        while (tString.charAt(i + 1 + p[i]) == tString.charAt(i - 1 - p[i])){
          p[i] +=1;
        }

        if (i + p[i] > right) {
          center = i;
          right = i + p[i];
        }
  }

  // Find the maximum element in p.
  var maxLen = 0,
      centerIndex = 0;
  for (i = 1; i < lenT-1; i++) {
    if (p[i] > maxLen) {
      maxLen = p[i];
      centerIndex = i;
    }
  }
  console.log(s.substr((centerIndex - 1 - maxLen)/2, maxLen));
  return maxLen;

}
