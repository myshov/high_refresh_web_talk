
let start;
function animate(ts) {
  if (start === undefined) {
    start = ts;
  }
  
  const dt = (ts - start) / 1000;
  const dc = Math.round(180 * dt);
  start = ts;
  
  drawDvd(ctx, x, y, currHue);
  x = x + dc * movVec[0];
  if ((x >= boundX - imgWidth && movVec[0] > 0) || (x <= 0 && movVec[0] < 0)) {
    movVec[0] *= -1;
    currHue = getRandomHue();
  }
  
  y = y + dc * movVec[1];
  if ((y <= 0 && movVec[1] < 0) || (y >= boundY - imgHeight && movVec[1] > 0)) {
    movVec[1] *= -1;
    currHue = getRandomHue();
  }

  rafId = requestAnimationFrame(animate);
}
