if (!isGameOver) {
  setInterval(() => {
    let dX = dragon.getBoundingClientRect();
    let oX = obstacle.getBoundingClientRect();

    let dR = Math.floor(dX.right);
    let dL = Math.floor(dX.left);
    let dB = Math.floor(dX.bottom);
    let oR = Math.floor(oX.right);
    let oL = Math.floor(oX.left);
    let oT = Math.floor(oX.top);

    //*if these condition are true then you are dead
    if (oL - dR < 50 && oR - dL < 400 && oR - dL > 30 && dB - oT > 0) {
      gameoverScore.innerText = `YOUR SCORE: ${score}`;
      isGameOver = true;
      pauseGame();
    }

    //*for cross to add score
    if (oR < 0) {
      if (cross) {
        setScore();
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 1000);
        //speeds up the game
        animationDuration -= 50;
        console.log(animationDuration);
        animateObstacle.style.animation = `obstacle_move ${animationDuration}ms linear infinite`;
      }
    }
  }, 10);
}
function setScore() {
  score++;
  sessionSetItem("score", score);
  scoreBoard.innerText = `Score: ${score}`;
}
function scoreReset() {
  score = 0;
  sessionSetItem("score", score);
  scoreBoard.innerText = `Score: ${score}`;
}
