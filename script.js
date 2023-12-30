let timer = 120;
let score = 0;
let hitRn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1 id="over">Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  // alert("Hello");
  let clickedNum = Number(details.target.textContent);
  if (clickedNum === hitRn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
makeBubble();
getNewHit();
runTimer();
