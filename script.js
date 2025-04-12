
const player = document.getElementById("player");
const fallingObject = document.getElementById("falling-object");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameWidth = document.getElementById("game-area").offsetWidth;

document.addEventListener("keydown", (event) => {
  const playerRect = player.getBoundingClientRect();
  if (event.key === "ArrowLeft" && playerRect.left > 0) {
    player.style.left = player.offsetLeft - 20 + "px";
  }
  if (event.key === "ArrowRight" && playerRect.right < gameWidth) {
    player.style.left = player.offsetLeft + 20 + "px";
  }
});

function dropObject() {
  let xPosition = Math.random() * gameWidth;
  fallingObject.style.left = xPosition + "px";
  fallingObject.style.top = "0px";

  const interval = setInterval(() => {
    let objectRect = fallingObject.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect();

    fallingObject.style.top = objectRect.top + 5 + "px";

    if (
      objectRect.bottom > playerRect.top &&
      objectRect.right > playerRect.left &&
      objectRect.left < playerRect.right
    ) {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
      clearInterval(interval);
      dropObject();
    }

    if (objectRect.top > window.innerHeight) {
      clearInterval(interval);
      dropObject();
    }
  }, 20);
}

dropObject();