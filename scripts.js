var dayOfEvent = new Date("Nov 1, 2018 15:37:25").getTime();
var now = new Date().getTime();
var distance = dayOfEvent - now;
var daysUntilEvent = Math.floor(distance / (1000 * 60 * 60 * 24));
var daysUntilEventString = daysUntilEvent.toString();
var daysUntilEventList = [daysUntilEventString[0],daysUntilEventString[1],daysUntilEventString[2]];



document.getElementById("countdown-box-one").innerHTML = daysUntilEventList[0];
document.getElementById("countdown-box-two").innerHTML = daysUntilEventList[1];
document.getElementById("countdown-box-three").innerHTML = daysUntilEventList[2];
