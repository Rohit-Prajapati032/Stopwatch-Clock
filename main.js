let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");


// console.log(time.getFullYear());

setInterval(()=>{
    let time = new Date();
    hour.innerHTML = (time.getHours() < 10 ? `0`:'' )+ time.getHours();
    min.innerHTML = (time.getMinutes() < 10 ? `0`:'' )+ time.getMinutes();
    sec.innerHTML = (time.getSeconds() < 10 ? `0`:'' )+ time.getSeconds();
},1000)










// <-----------stopwatch js------------------>


let stopwatchMin = document.querySelector(".stop-mins");
let stopwatchSec = document.querySelector(".stop-sec");
let stopwatchMsec = document.querySelector(".stop-msec");


let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let restarttBtn = document.querySelector(".restart");
let minute = 0;
let seco = 0;
let mseco = 0;
let timerId = null;



function startTimer(){
mseco++;
if(mseco == 100){
mseco = 0;
seco++;
if(seco == 60){
    seco = 0;
    minute++;
    }

  }
let minString = minute < 10 ? `0${minute}` : minute;
let secString = seco < 10 ? `0${seco}` : seco;
let msecString = mseco < 10 ? `0${mseco}` :mseco;
stopwatchMin.innerHTML = minString;
stopwatchSec.innerHTML = secString;
stopwatchMsec.innerHTML = msecString;


}


startBtn.addEventListener('click', ()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);
});




pauseBtn.addEventListener('click', ()=>{
        clearInterval(timerId);
});

restarttBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    stopwatchMin.innerHTML = '00';
   stopwatchSec.innerHTML = '00';
   stopwatchMsec.innerHTML = '00';
    minute = 0;
     seco = 0;
    mseco = 0;
   
})


