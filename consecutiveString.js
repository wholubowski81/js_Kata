// Description:
//
// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// Example:
//
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {

let len = strarr.length;
let lenStr = 0;
let str = [], longestConsec = '';


if (len == 0 || k>len || k<=0) {
    return "";}

for(let i = 0; i<len; i++){
  str = strarr.slice(i,i+k).join("").toString();
  if(lenStr < str.length){
      lenStr = str.length;
      longestConsec = str.toString();
      }
}
return longestConsec;
}
