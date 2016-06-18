

$('#video1, #video2, #video3').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})

// var video = document.getElementsByClassName("myvideo");
//
// $(video).on({
//     mouseenter: function () {
//       video.setAttribute("controls","controls")
//     },
//     mouseleave: function () {
//       video.removeAttribute("controls");
//     }
// });
