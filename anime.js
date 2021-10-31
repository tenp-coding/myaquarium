const targetElement2 = document.getElementById("tools");


document.addEventListener("scroll", function() {
    const getElementDistance = targetElement2.getBoundingClientRect().top;
    if (window.innerHeight > getElementDistance) {
        targetElement2.classList.add("start");
    } 
})
