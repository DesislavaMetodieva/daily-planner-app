var todayDate = moment();

$('#currentDay').text(todayDate.format('dddd, MMMM Do'));

// Get the current hour
var currentHour = moment().hour();

// Get all elements with the class "time-div"
var hourDivs = document.getElementsByClassName("time-div");

// Loop through the hour divs and add the appropriate class
for (var i = 0; i < hourDivs.length; i++) {

  var hour = parseInt(hourDivs[i].querySelector("span").id);
  
  if (hour < currentHour) {
    hourDivs[i].classList.add("past");
  } else if (hour === currentHour) {
    hourDivs[i].classList.add("present");
  } else {
    hourDivs[i].classList.add("future");
  }
};

// Get the button and textarea elements

var saveBtn = document.getElementById("saveBtn");
var textarea = document.getElementById("textarea");

// Click event listener for each button which then it grabs values from time and value divs and saves them to local storage

document.querySelectorAll("#saveBtn").forEach(function(saveBtn) {
  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("mewo")
    var value = saveBtn.previousElementSibling.value;
    var time = saveBtn.parentNode.id.split("-")[1];
    localStorage.setItem(time, value);
  });
});

//retrieves items from local storage and sets them in proper places

document.querySelector("#hour-09 .time-block").value = localStorage.getItem("09");
document.querySelector("#hour-10 .time-block").value = localStorage.getItem("10");
document.querySelector("#hour-11 .time-block").value = localStorage.getItem("11");
document.querySelector("#hour-12 .time-block").value = localStorage.getItem("12");
document.querySelector("#hour-13 .time-block").value = localStorage.getItem("13");
document.querySelector("#hour-14 .time-block").value = localStorage.getItem("14");
document.querySelector("#hour-15 .time-block").value = localStorage.getItem("15");
document.querySelector("#hour-16 .time-block").value = localStorage.getItem("16");
document.querySelector("#hour-17 .time-block").value = localStorage.getItem("17");

