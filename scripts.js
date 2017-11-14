//Ticket total box
function getNumberOfTickets() {
  //get the number of "answer everything" tickets you want to buy
  var numberOfAnswerETickets = document.getElementById("answer-everything-tickets").value;
  //get the number of "college" tickets you want to buy
  var numberOfCollegeTickets = document.getElementById("college-student-tickets").value;
  //If you change the number on the "answer everything" dropdown, activate function again
  document.getElementById("answer-everything-tickets").addEventListener("change", getNumberOfTickets);
  //If you change the number on "college" dropdown, activate function again
  document.getElementById("college-student-tickets").addEventListener("change", getNumberOfTickets);
  //Add up the cost of tickets and change the html of the total div to the new total
  document.getElementById("total-cost-tickets").innerHTML = (numberOfAnswerETickets * 42) + (numberOfCollegeTickets * 10);
}



//Accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}


//Countdown clock
var dayOfEvent = new Date("Nov 1, 2018 15:37:25").getTime();
var now = new Date().getTime();
var distance = dayOfEvent - now;
var daysUntilEvent = Math.floor(distance / (1000 * 60 * 60 * 24));
var daysUntilEventString = daysUntilEvent.toString();
var daysUntilEventList = [daysUntilEventString[0],daysUntilEventString[1],daysUntilEventString[2]];



document.getElementById("countdown-box-one").innerHTML = daysUntilEventList[0];
document.getElementById("countdown-box-two").innerHTML = daysUntilEventList[1];
document.getElementById("countdown-box-three").innerHTML = daysUntilEventList[2];
