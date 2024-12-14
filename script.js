window.addEventListener('focus',function(){
    this.document.title="KiSI - Portfolio";
})
window.addEventListener('blur',function(){
    this.document.title="KiSI - Sketch, Design, Develop";
})

function navToggle() {
    var x = document.getElementById('toggle');
    var y = document.getElementById('add');
    if (x.style.display === "none") {
        setTimeout(function () {
            x.style.display = "block";
            y.style.rotate = "135deg";

            x.style.transitionDuration = "display 2.5s ease-in";
            y.style.transitionDuration = "transform 2.5s ease-in";
        }, 100)
    } else {
        setTimeout(function () {
            x.style.display = "none";
            y.style.rotate = "0deg";

            x.style.transitionDuration = "display 2.5s ease-in";
            y.style.transitionDuration = "transform 2.5s ease-in";
        }, 100)
    }
}