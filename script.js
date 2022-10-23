window.addEventListener("DOMContentLoaded", ()=>{

  const slides = document.querySelectorAll('.slide');

  for(const slide of slides) {
    slide.addEventListener('click', (e)=>{
      clearActiveCLasses();
      slide.classList.add('active');
      
    });
  }

  function clearActiveCLasses() {
    slides.forEach(element => {
      element.classList.remove('active');
    });

  }

});