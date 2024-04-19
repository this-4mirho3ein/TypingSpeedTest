const theTimer=document.querySelector(".timer");
const testArea=document.querySelector("#test-area");
const OriginText=document.querySelector("#origin-text p").innerHTML;
const textWrapper=document.querySelector(".test-wrapper");  
const resetBtn=document.querySelector("#reset");


var timer=[0,0,0,0];
var timerRuning=false
var interval;

function leadingZero(time){
    if (time<=9) {
        time="0"+time;
    }
    return time;
}


function runTimer(){
let currentTime= leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);

theTimer.innerHTML=currentTime;

timer[3]++;

timer[0]=Math.floor((timer[3]/100)/60);
timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));



}


function spellChekck() {
    let textEntered = testArea.value;
    let originTextMatch=OriginText.substring(0,textEntered.length);

    if (textEntered==OriginText) {
        textWrapper.style.borderColor="green";
        clearInterval(interval);
    }else{
        if(textEntered==originTextMatch){
            textWrapper.style.borderColor="yellow";
        }else{
            textWrapper.style.borderColor="red";
        }
    }
}


function reset() {
    clearInterval(interval);
    interval=null;
    var timer=[0,0,0,0];
    var timerRuning=false;

    testArea.value="";
    theTimer.innerHTML="00:00:00";
    textWrapper.style.borderColor="gray";
}

function start(){
    let textEnteredLength=testArea.value.length;
    if (textEnteredLength==0 && !timerRuning) {
        timerRuning==true
        interval=setInterval(runTimer,10);
    }

}

testArea.addEventListener("keypress",start);
testArea.addEventListener("keyup",spellChekck);
resetBtn.addEventListener("click",reset);