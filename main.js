var todayDate = moment();

$('#currentDay').text(todayDate.format('dddd, MMMM Do'));

// Get the current hour
var currentHour = moment().hour();

// Get all elements with the class "hour"
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

// Add click event listener to the button
// Store the event in Local storage so when the page reloads, the events are still rendering on the page in the same location

saveBtn.addEventListener("click", function(){
  console.log("mewo");
  const text = textarea.value;
  localStorage.setItem("text", text);
});


// Once event is added and user submits it the app should return and render a confirmation of the happened. The message should appear above on the div container

