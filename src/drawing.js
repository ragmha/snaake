import options from './options';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = options.width;
canvas.height = options.height;

const draw = (cell, color) => {
  let width = options.width / options.cols;
  let height = options.height / options.rows;

  let [x, y, w, h] = [cell[0] * width, cell[1] * height, width, height].map(
    Math.round
  );

  if (color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  } else {
    ctx.clearRect(x, y, w, h);
  }
};

const drawSegment = cell => draw(cell, options.snakeColor);

const drawFood = cell => draw(cell, options.foodColor);

const eraseCell = cell => draw(cell);

const reset = () => ctx.clearRect(0, 0, options.width, options.height);

export default {
  drawSegment,
  drawFood,
  eraseCell,
  reset,
};
