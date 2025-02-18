const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerScore = 0;
let aiScore = 0;

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
  drawRect(0, 0, canvas.width, canvas.height, '#000');
  drawRect(player.x, player.y, player.width, player.height, '#fff');
  drawRect(ai.x, ai.y, ai.width, ai.height, '#fff');
  drawBall(ball.x, ball.y, ball.width, '#fff');
  drawText(playerScore, canvas.width / 4, 50);
  drawText(aiScore, 3 * canvas.width / 4, 50);
}

function drawText(text, x, y) {
  ctx.fillStyle = '#fff';
  ctx.font = '35px Arial';
  ctx.fillText(text, x, y);
}

function update() {
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
    resetBall();
  }

  if (ball.x + ball.width > canvas.width) {
    playerScore++;
    resetBall();
  }

  if (ball.x < player.x + player.width && ball.y + ball.height > player.y && ball.y < player.y + player.height) {
    ball.dx *= -1;
  }

  if (ball.x + ball.width > ai.x && ball.y + ball.height > ai.y && ball.y < ai.y + ai.height) {
    ball.dx *= -1;
  }
}

function resetBall() {
  ball.x = canvas.width / 2 - ballSize / 2;
  ball.y = canvas.height / 2 - ballSize / 2;
  ball.dx *= -1;
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

// Increase ball speed every minute
setInterval(() => {
  ball.dx *= 1.1;
  ball.dy *= 1.1;
}, 60000);

loop();
