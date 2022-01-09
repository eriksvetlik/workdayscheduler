var currentDay = $("#currentDay");
var currentHour = moment().hour();
var hourBlock = $(".hourBlock");
var hourID;
var saveBtn = $(".saveBtn");
var task = $(".task");

// function to bring values from local storage and display on page
function taskStorage() {
  $(hourBlock).each(function () {
    hourID = $(this).attr("id");

    var getTask = localStorage.getItem(hourID);
    $(this).children().find(task).val(getTask);
  });
}

// function to color each time block if the time block is behind, equal to, or ahead of the current time
function colorHourBlocks() {
  $(hourBlock).each(function () {
    hourID = $(this).attr("id");

    if (hourID < currentHour) {
      $(this).addClass("past");
    } else if (hourID == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// function to display the date with Moment.js
function displayTime() {
  $(currentDay).text(moment().format("h:mm a | dddd, MMMM D | YYYY"));
}

// when the Save button is clicked, the hourBlock ID and task content are saved
$(saveBtn).click(function () {
  var taskContent = $(this).parent().siblings().find(task).val();
  var id = $(this).parent().parent().attr("id");

  localStorage.setItem(id, taskContent);
});

colorHourBlocks();
setInterval(displayTime, 1000);
taskStorage();
