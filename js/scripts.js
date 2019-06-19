//business logic

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true; //any year divisible by 4 or 400, and not divisible by 100 will return true.
  } else {
    return false; //otherwise, it will return false.
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