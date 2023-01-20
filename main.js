// console.log("meow");

// Pseudo code

// 1. Create html element will hold all slot hours - done

// 2. Add css classes for the element so it has blocks/lines for every hour slot from 9.00 until 17.00h ( 8 divs/blocks)

// 3. Take the current time in format Friday, January 20nd and place it within element id="currentDay". format ("dddd MMMM Qo")

var todayDate = moment();
$('#currentDay').text(todayDate.format('dddd, MMMM Do'));

// In order to color code each time block based on past, present, and future when the timeblock is viewed is to create a loop which is checking every block if it is in past hour, present hour or future hours. If equals to one of those 3 types of hours (past, present, future) I must add the relevant class to change the color of the corresponding block.

// Get the current hour
var currentHour = moment().hour();

// Get all elements with the class "hour"
var hourDivs = document.getElementsByClassName("hour");

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

// Create event listener for every event being added to the blocks


// Store the event in Local storage so when the page reloads, the events are still rendering on the page in the same location


// Once event is added and user submits it the app should return and render a confirmation of the happened. The message should appear above on the div container

