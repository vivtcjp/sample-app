const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerScore = 0;
let aiScore = 0;
let startTime = Date.now();

const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

const player = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 0
};

const ai = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 2
};

const ball = {
  x: canvas.width / 2 - ballSize / 2,
  y: canvas.height / 2 - ballSize / 2,
  width: ballSize,
  height: ballSize,
  dx: 2,
  dy: 2
};

const hitSound = new Audio('sounds/hit.mp3');
const scoreSound = new Audio('sounds/score.mp3');

let difficulty = 'normal';
let playerColor = '#fff';
let aiColor = '#fff';
let ballColor = '#fff';
let isPaused = false;

function setDifficulty(level) {
  switch (level) {
    case 'easy':
      ball.dx = 2;
      ball.dy = 2;
      ai.dy = 1.5;
      break;
    case 'normal':
      ball.dx = 3;
      ball.dy = 3;
      ai.dy = 2;
      break;
    case 'hard':
      ball.dx = 4;
      ball.dy = 4;
      ai.dy = 2.5;
      break;
  }
}

function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

function draw() {
  drawRect(0, 0, canvas.width, canvas.height, bgColor?.value || '#000');
  drawRect(player.x, player.y, player.width, player.height, playerColor);
  drawRect(ai.x, ai.y, ai.width, ai.height, aiColor);
  drawBall(ball.x, ball.y, ball.width, ballColor);
  drawText(playerScore, canvas.width / 4, 50);
  drawText(aiScore, 3 * canvas.width / 4, 50);
  drawText(`Level: ${difficulty}`, canvas.width / 2, 50);
  drawText(`Time: ${Math.floor((Date.now() - startTime) / 1000)}s`, canvas.width / 2, 100);
}

function drawText(text, x, y) {
  ctx.fillStyle = '#fff';
  ctx.font = '35px Arial';
  ctx.fillText(text, x, y);
}

function update() {
  if (isPaused) return;

  player.y += player.dy;
  ai.y += ai.dy;

  if (ai.y < 0 || ai.y + ai.height > canvas.height) {
    ai.dy *= -1;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y < 0 || ball.y + ball.height > canvas.height) {
    ball.dy *= -1;
  }

  if (ball.x < 0) {
    aiScore++;
    scoreSound.play();
    resetBall();
    checkGameOver();
  }

  if (ball.x + ball.width > canvas.width) {
    playerScore++;
    scoreSound.play();
    resetBall();
    checkGameOver();
  }

  if (ball.x < player.x + player.width && ball.y + ball.height > player.y && ball.y < player.y + player.height) {
    ball.dx *= -1;
    hitSound.play();
  }

  if (ball.x + ball.width > ai.x && ball.y + ball.height > ai.y && ball.y < ai.y + ai.height) {
    ball.dx *= -1;
    hitSound.play();
  }
}

function resetBall() {
  ball.x = canvas.width / 2 - ballSize / 2;
  ball.y = canvas.height / 2 - ballSize / 2;
  ball.dx *= -1;
}

function checkGameOver() {
  if (playerScore >= 5 || aiScore >= 5) {
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('gameControls').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';
    document.getElementById('winner').innerText = playerScore >= 5 ? 'Player' : 'AI';
  }
}

function loop() {
  draw();
  update();
  requestAnimationFrame(loop);
}

function movePaddle(event) {
  switch (event.key) {
    case 'ArrowUp':
      player.dy = -4;
      break;
    case 'ArrowDown':
      player.dy = 4;
      break;
  }
}

function stopPaddle(event) {
  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowDown':
      player.dy = 0;
      break;
  }
}

document.addEventListener('keydown', movePaddle);
document.addEventListener('keyup', stopPaddle);

document.addEventListener('mousemove', (event) => {
  const canvasRect = canvas.getBoundingClientRect();
  const mouseY = event.clientY - canvasRect.top;
  player.y = mouseY - paddleHeight / 2;
});

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    isPaused = !isPaused;
  }
});

// Increase ball speed every minute
setInterval(() => {
  ball.dx *= 1.1;
  ball.dy *= 1.1;
}, 60000);

// Change background color
const bgColor = document.getElementById('bgColor');
bgColor.addEventListener('input', (event) => {
  draw();
});

// Change player paddle color
const playerColorInput = document.getElementById('playerColor');
playerColorInput.addEventListener('input', (event) => {
  playerColor = event.target.value;
  draw();
});

// Change AI paddle color
const aiColorInput = document.getElementById('aiColor');
aiColorInput.addEventListener('input', (event) => {
  aiColor = event.target.value;
  draw();
});

// Change ball color
const ballColorInput = document.getElementById('ballColor');
ballColorInput.addEventListener('input', (event) => {
  ballColor = event.target.value;
  draw();
});

// Set difficulty level
const difficultySelect = document.getElementById('difficulty');
difficultySelect.addEventListener('change', (event) => {
  difficulty = event.target.value;
  setDifficulty(difficulty);
});

// Start game
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('gameCanvas').style.display = 'block';
  document.getElementById('gameControls').style.display = 'flex';
  loop();
});