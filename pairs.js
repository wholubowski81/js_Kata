var sum_pairs=function(ints, s){
var value=[];

for(var x = 0; x<ints.length; x++){
    for(var y = x+1; y<ints.length; y++){
        if (ints[x]+ints[y]===s){
        if (ints[x] == 5 && ints[y] == 5){break;}
        else{
        value.push(ints[x]);
        value.push(ints[y]);
        console.log(value);
        return value;}}
        }
    }
}

var sum_pairs=function(ints, s){
var value=[];
var y=0;
for(var x = 0, len = ints.length ; x<len; x++){
y = ints.indexOf((s-ints[x]), x+1);
if(y != -1 ){
        value.push(ints[x]);
        value.push(ints[y]);
        console.log(value);
        return value;}
    }
}
