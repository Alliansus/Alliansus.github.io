
// Set the date we're counting up to
var wvwcountDownDate = new Date("jan 31, 2018 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var wvwdistance = now - wvwcountDownDate;
  
  // Time calculations for days, hours, minutes and seconds
  var wvwdays = Math.floor(wvwdistance / (1000 * 60 * 60 * 24));
  var wvwhours = Math.floor((wvwdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var wvwminutes = Math.floor((wvwdistance % (1000 * 60 * 60)) / (1000 * 60));
  var wvwseconds = Math.floor((wvwdistance % (1000 * 60)) / 1000);
  
  // Create elements that display day,hours,minutes,seconds
  document.getElementById("wvwday").innerHTML = wvwdays 
  document.getElementById("wvwhour").innerHTML = wvwhours 
  document.getElementById("wvwminute").innerHTML = wvwminutes 
  document.getElementById("wvwsecond").innerHTML = wvwseconds
}, 1000)