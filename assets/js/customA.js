let aboutstate = false;

const whoT = document.getElementById("whoT");
const whoB = document.getElementById("whoB");
whoB.addEventListener('click', () => {
    aboutstate = !aboutstate;

    if (aboutstate === true) {
        whoT.classList.add("d-none")
        whoB.innerText = "Read More"
    }
    else {
        whoT.classList.remove("d-none");
        whoB.innerText = "Read Less"
    }
})

let oal3tate = false;

const gtext = document.getElementById("gtext");
const gButton = document.getElementById("gButton");
gButton.addEventListener('click', () => {
    oal3tate = !oal3tate;

    if (oal3tate === true) {
        gtext.classList.add("d-none")
        gButton.innerText = "Read More"
    }
    else {
        gtext.classList.remove("d-none");
        gButton.innerText = "Read Less"
    }
})