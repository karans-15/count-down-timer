//for configurable maximum
let maxMin = 5;
let maxSec = 60;
//NOTE THE MAXIMUM VALUE OF THE TIMER CAN BE EDITED HERE TO DISPLAY ACCORDINGLY ON THE MAIN PAPGE. (IF SECONDS = 0, INITIALIZE AS SECONDS = 60)

//will load the Max time on loading
function newStart(){
  if(seconds<10){
    displaySeconds = "0" + seconds.toString();
  }
  else{
    displaySeconds = seconds;
  }
  if(minutes<10){
    displayMinutes = "0" + minutes.toString();
  }
  else{
    displayMinutes = minutes;
  }
  if (seconds==60){
    displaySeconds="00";
}


//display updated time values
document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;
}
//defining variables for time values
let seconds= maxSec;
let minutes= maxMin;

//define variables to hold display values
let displaySeconds;
let displayMinutes;

//variables to hold setInterval function
let interval = null;

//variable to hold stopwatch startPause
let status = true;

//Timer function
function timer(){
  //for reset
  if (minutes==0 && seconds==60){
    window.clearInterval(interval);
    x = document.getElementById("display")
    x.style.color="red";
    document.getElementById("start-pause-reset").innerHTML="Reset";
    return;
  }
    seconds--;

  //logic for decrement
  if (seconds/60 == 0){
    seconds = 60;
  }
  if (seconds == 59){
    minutes--;
  }

  //if statements for display values
  if(seconds<10){
    displaySeconds = "0" + seconds.toString();
  }
  else{
    displaySeconds = seconds;
  }
  if(minutes<10){
    displayMinutes = "0" + minutes.toString();
  }
  else{
    displayMinutes = minutes;
  }
  if (seconds==60){
    displaySeconds="00";
  }


  //display updated time values
  document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;
}

//for Reset condition
function isOver(){
  return (minutes === 0 && seconds === 60)
}

//fucntion for Start/Pause/Reset
function startPause(){
  if (isOver()){
    minutes = maxMin;
    seconds = maxSec;
    if(seconds<10){
      displaySeconds = "0" + seconds.toString();
    }
    else{
      displaySeconds = seconds;
    }
    if(minutes<10){
      displayMinutes = "0" + minutes.toString();
    }
    else{
      displayMinutes = minutes;
    }
    if (seconds==60){
      displaySeconds="00";
    }


    //display updated time values
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;
    x = document.getElementById("display")
    x.style.color="black";
  }
  if(status==true){
    status = false;
    interval = window.setInterval(timer, 1000);
    document.getElementById("start-pause-reset").innerHTML="Pause";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("start-pause-reset").innerHTML="Start"
    status = true;
  }
}
