var currentDay = $("#currentDay");
var currentHour = moment().hour();
var hourBlock = $(".hourBlock");

// function to display the date with Moment.js
function displayDay() {
  $(currentDay).text(moment().format("h:mm a | dddd, MMMM D | YYYY"));
}

// function to color each time block if the time block is behind, equal to, or ahead of the current time
function colorHourBlocks() {
  $(hourBlock).each(function () {
    var hourID = $(this).attr("id");

    if (hourID < currentHour) {
      $(this).addClass("past");
    } else if (hourID == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

colorHourBlocks();
displayDay();
