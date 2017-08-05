const scoreSpan = document.getElementById('score');
const highScoreSpan = document.getElementById('highScore');
let score = 0;
let highScore = +localStorage.getItem('highScore');

const updateHighScore = () => {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
  }
  highScoreSpan.innerText = highScore;
};

const increment = () => {
  score++;
  scoreSpan.innerText = score;
  updateHighScore();
};

const reset = () => {
  score = 0;
  scoreSpan.innerText = score;
  updateHighScore();
};

export default {
  increment,
  reset,
  get value() {
    return score;
  },
};
