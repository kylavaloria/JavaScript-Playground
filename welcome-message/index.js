let name = "Doc Mayki"
let greeting = "ang sikip mo"

let welcomeEl = document.getElementById("welcome-el")

function welcomeBanner() {
    welcomeEl.innerText = name + " " + greeting + "!"
}

welcomeBanner()