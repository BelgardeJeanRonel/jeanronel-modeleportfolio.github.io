const iconOpenMenu = document.querySelector(".icon-open-menu");
const menuModal = document.querySelector(".modal-menu");
const navLink = document.querySelector(".nav-link");

iconOpenMenu.addEventListener("click", function(e) {

    menuModal.classList.toggle("show-modal");
    navLink.classList.toggle("show-modal");

    e.currentTarget.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
          ], {
            duration: 500
    })

})


const iconCloseMenu = document.querySelector(".icon-close-menu");
iconCloseMenu.addEventListener("click", function(e) {

    menuModal.classList.toggle("show-modal");
    navLink.classList.toggle("show-modal");


    e.currentTarget.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
          ], {
            duration: 500
    })

    navLink.animate([
      { transform: 'translate(0)'},
      { transform: 'translate(-200%)'},
      ], {
      duration: 400,
   
    })

})

menuModal.addEventListener("click", function(){
    menuModal.classList.toggle("show-modal");
    navLink.classList.toggle("show-modal");

    navLink.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(-200%)'},
        ], {
        duration: 400,
    
    })
})


navLink.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", function(){
        menuModal.classList.remove("show-modal");
        navLink.classList.remove("show-modal");

    })
})





const ratio = .1;
const options = {
    root : null,
    rootMargin : "0px",
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach( entry => {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.remove("reveal")
            
        }
    })
}

document.documentElement.classList.add("reveal-loaded");
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})

const buttonToTheTop = document.querySelector(".btn-fleche");

if (buttonToTheTop){
    buttonToTheTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
    })
}
