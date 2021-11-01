window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loading").classList.remove("active");
  }, 2000)
})

window.addEventListener("load", function() {
  setTimeout(function() {
     document.getElementById("logo").classList.remove("active");
  }, 5000)
})

window.addEventListener("load", function() {
  setTimeout(function() {
     document.getElementById("topword").classList.remove("active");
  }, 6000)
})

const targetElement = document.getElementById("animetarget");

document.addEventListener("scroll", function() {
    const getElementDistance = targetElement.getBoundingClientRect().top;
    if (window.innerHeight > getElementDistance) {
        targetElement.classList.add("show");
    } 
})


window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;   
  if ( currentY > 400) {
    document.getElementById("toTopAnime").classList.add("show2");
  }
  else {
    document.getElementById("toTopAnime").classList.remove("show2");
  }
})


const targetElement2 = document.getElementById("tools");

document.addEventListener("scroll", function() {
    const getElementDistance = targetElement2.getBoundingClientRect().top;
    if (window.innerHeight > getElementDistance) {
        targetElement2.classList.add("start");
    } 
})


const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 0;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  };
