var btn_next = document.getElementById("btn-next")
var btn_prev = document.getElementById("btn-prev")

var translateX = -100;

if(btn_prev && btn_next) {

    btn_next.addEventListener("click", () => {
        let testimonials = document.querySelectorAll(".testimonial")
    
        translateX -= 100;
    
        testimonials.forEach( testimonial => {
            testimonial.style.transform = "translateX(" + translateX + "%)";
        })
    })
    
    btn_prev.addEventListener("click", () => {
        let testimonials = document.querySelectorAll(".testimonial")
    
        translateX += 100;
    
        testimonials.forEach( testimonial => {
            testimonial.style.transform = "translateX(" + translateX + "%)";
        })
    })

}

document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("open")
})

document.querySelector(".mobile-menu-btn-close").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("open")
})