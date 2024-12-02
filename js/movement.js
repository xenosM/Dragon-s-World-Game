document.onkeydown = (e) => {
  //* variable definition
  let key = e.key;
  //   console.log(e);
  if (key == "ArrowUp") {
    if (!dragon.classList.contains("dragon_jump")) {
      dragon.classList.add("dragon_jump");
      setTimeout(() => {
        dragon.classList.remove("dragon_jump");
      }, 970);
    }
  }
  if (key == "ArrowRight") {
    let dragonXValue = parseInt(
      window.getComputedStyle(dragon).getPropertyValue("left")
    );
    if (dragon.getBoundingClientRect().right < window.innerWidth - 48)
      dragon.style.left = dragonXValue + 124 + "px";
  }
  if (key == "ArrowLeft") {
    if (dragon.getBoundingClientRect().left > 0) {
      let dragonXValue = parseInt(window.getComputedStyle(dragon).left);
      dragon.style.left = dragonXValue - 124 + "px";
    }
  }
};
