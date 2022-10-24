window.addEventListener('load', () => {

  const upBtn = document.querySelector('.up-button'),
        downBtn = document.querySelector('.down-button'),
        sidebar = document.querySelector('.sidebar'),
        mainSlide = document.querySelector('.main-slide'),
        container = document.querySelector('.container'),
        slidesCount = mainSlide.querySelectorAll('div').length;

  let activeSlideIndex = 0;

  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

  setTimeout( window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowDown') {
      changeSlide('down');
    }
  }), 0);
 

  setTimeout(window.addEventListener('keyup', e => {
    if (e.code === 'ArrowUp') {
      changeSlide('up');
    }
  }), 0); 

  upBtn.addEventListener('click', () => {
    changeSlide('up');
  });

  downBtn.addEventListener('click', () => {
    changeSlide('down');
  });

  function changeSlide(direction) {
    if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  }

});