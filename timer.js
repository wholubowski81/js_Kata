function count()
{

    var toDay = new Date();
    var day = toDay.getDate();
    var month = toDay.getMonth() + 1;
    var year = toDay.getFullYear();
    var hour = toDay.getHours();
    if(hour<10) hour = "0"+hour;
    var minutes = toDay.getMinutes();
    if(minutes<10) minutes ="0"+minutes;
    var seconds = toDay.getSeconds();
    if(seconds<10) seconds= "0"+seconds;

    document.getElementById("zegar").innerHTML = day+"/"+month+"/"+year+"  "+hour+":"+minutes+":"+seconds;

    setTimeout("count()",1000);
};

function countTax()
{
  // termin dostarczenia dokumentów do biura 15 każdego m-ca
  var day = 25;
  var month = new Date.getMonth();
  var year = new Date.getFullYear();
  var hour = 8;
  var minutes = 0;
  var taxDay = new Date(year, month, day, hour, minutes);
  var timeToTax = taxDay - toDay.getDate();

}
