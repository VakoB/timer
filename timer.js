const restart_button = document.getElementById("restart");
const start_button = document.getElementById("start");

const audio = document.getElementById("sound");


restart_button.setAttribute("disabled","");
start_button.setAttribute("disabled","");


const input_minutes = document.getElementById("minutes");
const input_seconds = document.getElementById("seconds");


//input_minutes.select()

input_minutes.addEventListener("input", minutesValidation);
input_seconds.addEventListener("input", secondsValidation);

input_minutes.addEventListener("input",()=>{
    if (input_minutes.value.length > 2){
        input_minutes.value = input_minutes.value.slice(0,2);
    }
});

input_seconds.addEventListener("input",()=>{
    if (input_seconds.value.length > 2){
        input_seconds.value = input_seconds.value.slice(0,2);
    }
});

input_minutes.addEventListener("input",()=>{
    result_value = "";
    for (let i = 0; i<input_minutes.value.length; i++){
        if (!Number.isNaN(Number(input_minutes.value[i]))){
            result_value += input_minutes.value[i];
        }

    }
    input_minutes.value = result_value;
});

input_seconds.addEventListener("input",()=>{
    result_value = "";
    for (let i = 0; i<input_minutes.value.length; i++){
        if (!Number.isNaN(Number(input_minutes.value[i]))){
            result_value += input_minutes.value[i];
        }

    }
    input_minutes.value = result_value;
});




input_minutes.addEventListener("input", ()=>{
    input_minutes.value == "" && input_seconds.value == "" ? 
    start_button.setAttribute("disabled","") : start_button
    .removeAttribute("disabled");
});

input_seconds.addEventListener("input", ()=>{
    input_minutes.value == "" && input_seconds.value == "" ? 
    start_button.setAttribute("disabled","") : start_button
    .removeAttribute("disabled");
});



function minutesValidation(){
    
    if (input_minutes.value.length >= 2){
        input_seconds.select();
    }
}



function secondsValidation(){
    if (input_seconds.value.length >= 2){
        input_seconds.blur();
    }
    else{

    }
}

function formatMinutesInput(){
    if (input_minutes.value.length == 1){
        input_minutes.value = '0'+input_minutes.value;
    }
}
function formatSecondsInput(){
    if (input_seconds.value.length == 1){
        input_seconds.value = '0'+input_seconds.value;
    }
}

let myInterval;

function clickedStartBtn(){
    const startIcon = document.querySelector("#start i");
    
    if (startIcon.className == "fa-solid fa-stop"){
        clearInterval(myInterval);
        restart_button.removeAttribute("disabled");
        startIcon.className = "fas fa-play";
        return;

    }

    

    if (input_minutes.value.length < 1){
        input_minutes.value = '00';
        input_minutes.setAttribute("disabled", "");
    }
    if (input_seconds.value.length < 1){
        input_seconds.value = '00';
        input_seconds.setAttribute("disabled", "");
    }


    input_minutes.setAttribute("disabled", "");
    input_seconds.setAttribute("disabled", "");
    startIcon.className = "fa-solid fa-stop";
    formatMinutesInput();
    formatSecondsInput();
    let minutes = Number(input_minutes.value[0]=='0'?
    input_minutes.value[1] : input_minutes.value);

    let seconds = Number(input_seconds.value[0]=='0'?
    input_seconds.value[1] : input_seconds.value);

    timer(minutes, seconds);

}
function timer(minutes, seconds){

    myInterval = setInterval(() => {
        if (seconds <= 0 && minutes <= 0){
            stopTimer(myInterval);
            return;
        }
        else if (seconds == 0){
            minutes-=1
            seconds = 60;

            input_minutes.value = format(minutes);
            input_seconds.value = format(seconds);
        }
        seconds--;
        input_seconds.value = format(seconds);
        
    }, 1000);
}
function stopTimer(myInterval){
    clearInterval(myInterval);
    clickedStartBtn();
    restart_button.removeAttribute("disabled");
    flashingTimer();
    playSound();
}
function format(value){
    if (value.toString().length == 1){
        return `0` + value;
    }
    else{
        return value;
    }
}
function flashingTimer(){

}
function clickedRestartBtn(){
    restart_button.setAttribute("disabled", "");
    input_minutes.value = "";
    input_seconds.value = "";
    
    input_minutes.removeAttribute("disabled");
    input_seconds.removeAttribute("disabled");

    input_minutes.select();
   
}

function playSound() {
    const sound = document.getElementById("sound");
    sound.play();
}