const canvas = document.getElementById("scene");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const imgData = "data:image/png;base64,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";

let boundX = canvas.width;
let boundY = canvas.height;
let x = 37;
let y = 17;
let directionX = 1;
let directionY = 1;
let movVec = [1, .7];
let imgWidth;
let imgHeight;
let currHue = getRandomHue();
let rafId;

function getRandomHue() {
  return Math.floor(Math.random() * 360);
}

function drawDvd(ctx, posX, posY, currHue) {
  ctx.clearRect(0, 0, boundX, boundY);
  ctx.drawImage(img, posX, posY, imgWidth, imgHeight); 
  ctx.globalCompositeOperation = 'source-in';
  ctx.fillStyle = `hsl(${currHue} 100% 50%)`;
  ctx.fillRect(posX, posY, imgWidth, imgHeight);
  ctx.globalCompositeOperation = "source-over";
}

function animate() {
  drawDvd(ctx, x, y, currHue);
  x = x + 3 * movVec[0];
  if ((x >= boundX - imgWidth && movVec[0] > 0) || (x <= 0 && movVec[0] < 0)) {
    movVec[0] *= -1;
    currHue = getRandomHue();
  }
  
  y = y + 3 * movVec[1];
  if ((y >= boundY - imgHeight && movVec[1] > 0) || (y <= 0 && movVec[1] < 0)) {
    movVec[1] *= -1;
    currHue = getRandomHue();
  }

  rafId = requestAnimationFrame(animate);
}

let img = new Image();

img.onload = function() {
  imgWidth = img.naturalWidth * 0.3;
  imgHeight = img.naturalHeight * 0.3;
  animate();
}

img.src = imgData;

window.onresize = function () {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  boundX = canvas.width;
  boundY = canvas.height;
  animate();
}
