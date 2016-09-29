// your code here:
// function init() {


// <h1 id="timer">Stop Watch</h1>
// <div class="controls">
//   <button id="reset">Reset</button>
//   <button id="start">Start</button>
//   <button id="pause">Pause</button>
// </div>
var sb = document.querySelector('#start');
sb.addEventListener('click', startButton);
var rs = document.querySelector('#reset');
rs.addEventListener('click', resetButton);
var ps = document.querySelector('#pause');
ps.addEventListener('click', pauseButton);
var header = document.querySelector('#timer');
var seconds = 0;
var timerID = 0;

function updateTime() {
  // alert("test");

  header.textContent = "Time elapsed: " + seconds + "s";
  seconds++;


}

// startButton();
function startButton() {
  timerID = setInterval(updateTime, 1000);
  // console.log(timerID);

}

function resetButton() {
  // alert("reset");
  // clearInterval(timerID)
  pauseButton()
  header.textContent = "Stop Watch";
  timerID = 0;
  seconds = 0;


}
// resetButton();


function pauseButton() {
  // alert("pause")
  clearInterval(timerID)
  timerID = 0;

}
// pauseButton();
// }
// init();
