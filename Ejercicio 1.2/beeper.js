const seEjecutaEnEvento =  () => {
    var body = document.querySelector("body")
    body.insertAdjacentHTML("beforeend", "<p>Beep</p>")
    body.classList.toggle("color")
}

document.querySelector("#beep").addEventListener("click",seEjecutaEnEvento);

