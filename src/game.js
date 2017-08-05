import Drawing from './drawing';
import Snake from './snake';
import Score from './score';
import options from './options';

let timeout;

const init = () => {
  Drawing.reset();
  let snake = new Snake(options.startX, options.startY);
  snake[options.startDirection]();
  Score.reset();

  const nextFrame = () => {
    clearTimeout(timeout);
    timeout = setTimeout(nextFrame, options.timeStep);
    snake.move();
  };

  nextFrame();
  window.onkeydown = e => {
    let keyMethods = {
      37: 'turnLeft',
      38: 'turnUp',
      39: 'turnRight',
      40: 'turnDown',
    };
    let method = keyMethods[e.keyCode];
    if (method) {
      snake[method]();
      nextFrame();
    }
  };
};

const reset = () => {
  clearTimeout(timeout);
  init();
};

const die = () => {
  alert(`💀 💀 💀 💀, YOUR SCORE was ${Score.value}`);
  reset();
};

const win = () => {
  alert(`🎉 🎉 🎉 🎉, YOU WIN!!!!`);
};

export default {
  die,
  win,
  init,
};
