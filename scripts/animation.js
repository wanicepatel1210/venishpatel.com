alert("This site is under developement");

let i = 0;
setInterval(function itemAnimation() {
    document.getElementsByClassName("animated-item")[i].style.display = "none";
    i += 1;
    i %= 4;
    document.getElementsByClassName("animated-item")[i].style.display = "inline-block";
}, 4000);

let body = document.getElementsByTagName("body")[0];
let toggle = document.getElementsByClassName("color-mode-toggle")[0];
let toggleSwitch = document.getElementsByClassName("color-mode-switch")[0];

let ids = ["programming", "framework", "database", "design", "editor", "miscellaneous", "nodejs", "github"];

toggle.addEventListener("click", function () {
    if (toggleSwitch.style.left == "0vw") {
        //Light mode will be enabled.
        toggleSwitch.style.left = "2vw";
        body.classList.add("light-mode");
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).src = `images/skills/${ids[i]}_black.png`;
        }
    } else {
        //Light mode will be disabled.
        toggleSwitch.style.left = "0vw";
        body.classList.remove("light-mode");
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).src = `images/skills/${ids[i]}_white.png`;
        }
    }
});
