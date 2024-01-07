const aboutustetx = document.querySelectorAll(".aboutuspara");


window.addEventListener("scroll", showtext);

showtext();

function showtext() {
    let requiredWindoheight = window.innerHeight / 5 * 4;

    aboutustetx.forEach(abotTxt => {
        let abotTxtHeight = abotTxt.getBoundingClientRect().top;

        if (abotTxtHeight < requiredWindoheight) {
            abotTxt.classList.add("showtext")
        } else {
            abotTxt.classList.remove("showtext")
        }
    })

}