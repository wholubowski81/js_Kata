function countTax()
{
  // termin dostarczenia dokumentów do biura godz. 8:00; 15 dnia każdego m-ca
  var day = 15;
  var month = (new Date).getMonth();
  var year = (new Date).getFullYear();
  var hour = 8;
  var minutes = 0;
  var toDay = new Date();
  var msDay = 24*60*60*1000;

  var taxDay = new Date(year, month, day, hour, minutes);

  function taxDate(){

    var timeToTax = taxDay.getTime() - toDay.getTime();

    var eDayToTax = timeToTax / msDay;
    var dayToTax = Math.floor(eDayToTax);

    var eHourToTax = eDayToTax % dayToTax * 24;
    var hourToTax = Math.floor(eHourToTax);

    var eMinutesToTax = (eHourToTax - hourToTax)*60;
    var minutesToTax = Math.floor(eMinutesToTax);

    var eSecondsToTax = (eMinutesToTax - minutesToTax)*60;
    var secondsToTax = Math.floor(eSecondsToTax);

    document.getElementById("zegar").innerHTML = "pozostało do podatków: " + dayToTax + "dni " + hourToTax + " godzin " + minutesToTax + " minut i " +
    secondsToTax + " sekund" ;

    setTimeout("countTax()",1000);
  }

  if(taxDay.getTime() > toDay.getTime())
  {
      taxDate();
  }
  else
  {
    taxDay = new Date(year, month+1, day, hour, minutes);
    taxDate();
  }

};
