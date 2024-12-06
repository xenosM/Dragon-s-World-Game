let dragon = document.getElementById("dragon");
let obstacle = document.getElementById("obstacle");
let gameOver = document.getElementById("gameover");
let gamePause = document.getElementById("gamepause");
let restartBtn = document.getElementById("restart_btn");
let gameRestartBtn = document.getElementById("game_restart_btn");
let scoreBoard = document.getElementById("score");
let gameoverScore = document.getElementById("gameover_score");

let isGameOver = false;
let score = 0;
let isGamePaused = false;
let cross = true;
let animationDuration = 3000;
let animateObstacle = document.querySelector(".animate_obstacle ");
function pauseGame() {
  obstacle.style.animationPlayState = "paused";
  isGamePaused = true;
  if (isGameOver) {
    gameOver.classList.remove("hidden");
    restartBtn.classList.add("hidden");
  } else {
    gamePause.classList.remove("hidden");
  }
}
function unpauseGame() {
  if (isGameOver) {
    restartGame();
  } else {
    gamePause.classList.add("hidden");
    obstacle.style.animationPlayState = "running";
    isGameOver = false;
    isGamePaused = false;
  }
}

function restartGame() {
  gameOver.classList.add("hidden");
  scoreReset();
  isGameOver = false;
  location.reload();
}

//* main code
gameRestartBtn.onclick = () => {
  restartGame();
};
restartBtn.onclick = (e) => {
  restartGame();
};
