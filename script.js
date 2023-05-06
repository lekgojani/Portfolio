const imageScorll = document.getElementById("nav");

window.addEventListener('scroll' ,() => {
    updateImage()
})

function updateImage() {
    imageScorll.style.opacity = 1 - window.pageYOffset / 900;
    imageScorll.window.style.backgroundSize = 160 - window.pageXOffset/ 12 + "%"
}