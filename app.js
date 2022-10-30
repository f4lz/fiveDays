window.addEventListener('DOMContentLoaded', () => {

  const startBtn = document.querySelector('#start'),
        screens = document.querySelectorAll('.screen'),
        timeEl = document.querySelector('#time'),
        board = document.querySelector('#board'),
        timeList = document.querySelector('#time-list');

  const colors = ['red', 'blue', 'green', 'yellow'];
  let time = 0;
  let score = 0;

  startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
  });

  timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
      time = parseInt(e.target.getAttribute('data-time'));
      screens[1].classList.add('up');
      startGame();
    }
  });

  board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
      score++;
      e.target.style.background = 'red';
      setTimeout(() => {
        remove(e);
      },0);
      createRandomCircle();
    }
  });

  function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
  }

  function decreaseTime() {
    if (time === 0) {
      finishGame();
    } else {
      let currentTime = --time;
      if (currentTime < 10) {
        currentTime = `0${currentTime}`;
      }
      setTime(currentTime);
    }
    
  }

  function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
  }

  function finishGame() {
    timeEl.parentNode.classList.add('hide');
    if (score < 10) {
      board.innerHTML = `<h1>Попробуй еще твой счет: <span class="primary">${score}</span></h1>`;
    } else if (score < 15 && score > 10) {
      board.innerHTML = `<h1>Ты молодец твой счет: <span class="primary">${score}</span></h1>`;
    } else {
      board.innerHTML = `<h1>У тебя отличный аим твой счет: <span class="primary">${score}</span></h1>`;

    }
  }

  function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.background = `linear-gradient(-45deg, ${getRandomColor()} 0%,  ${getRandomColor()} 100%`;
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;


    board.append(circle);
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRandomColor() {
    const index = (Math.floor(Math.random() * colors.length));
    return colors[index];
  }

  function remove(e) {
    e.target.remove();
  }
  

});