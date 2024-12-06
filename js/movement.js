document.onkeydown = (e) => {
  //* variable definition
  let key = e.key;
  //jump movement
  if (
    key == "ArrowUp" &&
    !dragon.classList.contains("dragon_jump") &&
    !isGamePaused
  ) {
    dragon.classList.add("dragon_jump");
    setTimeout(() => {
      dragon.classList.remove("dragon_jump");
    }, 970);
  }
  //right movement
  if (key == "ArrowRight" && !isGamePaused) {
    let dragonXValue = parseInt(
      window.getComputedStyle(dragon).getPropertyValue("left")
    );
    if (dragon.getBoundingClientRect().right < window.innerWidth - 48)
      dragon.style.left = dragonXValue + 124 + "px";
  }
  //left movement
  if (key == "ArrowLeft" && !isGamePaused) {
    if (dragon.getBoundingClientRect().left > 0) {
      let dragonXValue = parseInt(window.getComputedStyle(dragon).left);
      dragon.style.left = dragonXValue - 124 + "px";
    }
  }
  if (key == " ") {
    if (!isGamePaused) {
      pauseGame();
      playState = !playState;
    } else {
      unpauseGame();
      playState = !playState;
    }
  }
};
