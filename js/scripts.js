//business logic

var leapYear = function(year) {
  if (year % 100 === 0) {
    return false; // any year divisible by 100 should return false. 
  } else if (year % 4 === 0) { 
    return true; // any year divisible by 4 should return true. 
  } else {
    return false;
  }
};


//user interface logic that will retrieve user input from our form and call our business logic leapYear()

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});