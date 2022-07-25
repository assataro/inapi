var btn_next = document.getElementById("btn-next")
var btn_prev = document.getElementById("btn-prev")

var translateX = -100;

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