let bannerTextState = false;

const bannerText = document.getElementById("moreText");
const toglr = document.getElementById("bannertoggler");
toglr.addEventListener('click', () => {
    bannerTextState = !bannerTextState;
    console.log(bannerTextState);
    if (bannerTextState === true) {
        bannerText.classList.remove("d-none")
        toglr.innerText = "Read Less"
    }
    else {
        bannerText.classList.add("d-none")
        toglr.innerText = "Read More"
    }
})

let whoState = false;

const whoText = document.getElementById("whoText");
const whoButton = document.getElementById("whoButton");
whoButton.addEventListener('click', () => {
    whoState = !whoState;

    if (whoState === true) {
        whoText.classList.remove("d-none")
        whoButton.innerText = "Read Less"
    }
    else {
        whoText.classList.add("d-none")
        whoButton.innerText = "Read More"
    }
})

let oalState = false;

const goalText = document.getElementById("goalText");
const goalButton = document.getElementById("goalButton");
goalButton.addEventListener('click', () => {
    oalState = !oalState;

    if (oalState === true) {
        goalText.classList.remove("d-none")
        goalButton.innerText = "Read Less"
    }
    else {
        goalText.classList.add("d-none")
        goalButton.innerText = "Read More"
    }
})


let serviceState = false;

const serviceText = document.getElementById("serviceText");
const serviceButton = document.getElementById("serviceButton");
serviceButton.addEventListener('click', () => {
    serviceState = !serviceState;

    if (serviceState === true) {
        serviceText.classList.remove("d-none")
        serviceButton.innerText = "Read Less"
    }
    else {
        serviceText.classList.add("d-none")
        serviceButton.innerText = "Read More"
    }
})

let sauduS = false;

const saudiT = document.getElementById("saudiT");
const saudiB = document.getElementById("saudiB");
saudiB.addEventListener('click', () => {
    sauduS = !sauduS;

    if (sauduS === true) {
        saudiT.classList.remove("d-none")
        saudiB.innerText = "Read Less"
    }
    else {
        saudiT.classList.add("d-none")
        saudiB.innerText = "Read More"
    }
})

