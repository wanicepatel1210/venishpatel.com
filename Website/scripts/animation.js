let i = 0;
setInterval(function itemAnimation() {
    document.getElementsByClassName("animated-item")[i].style.display = "none";
    i += 1;
    i %= 4;
    document.getElementsByClassName("animated-item")[i].style.display = "inline-block";
}, 4000);

//let toggle = document.getElementsByClassName("color-mode-toggle")[0];

function toggleButton() {
    let toggle = document.getElementsByClassName("color-mode-switch")[0];
    let neomorphism = document.getElementsByClassName("neomorphism");
    let reverseNeomorphism = document.getElementsByClassName("reverse-neomorphism");
    if (toggle.style.left == "0vw") {
        toggle.style.left = "3vw";
        toggle.style.backgroundColor = "#0a192f99";
        document.documentElement.style.setProperty("--background-color", "#eeeeee");
        document.documentElement.style.setProperty("--primary-font-color", "#444452");
        document.documentElement.style.setProperty("--secondary-font-color", "#2962ff");
        let x = 0;
        while (x < 5) {
            neomorphism[x].style.boxShadow = "0.3vw 0.3vw 0.4vw #00000033, -0.3vw -0.3vw 0.4vw #ffffff";
            x++;
        }
        let y = 0;
        while (y < 2) {
            reverseNeomorphism[y].style.boxShadow = "inset 0.4vw 0.4vw 0.4vw #00000033, inset -0.4vw -0.4vw 0.4vw #ffffff";
            y++;
        }
    } else {
        toggle.style.left = "0vw";
        toggle.style.backgroundColor = "#ffffff20";
        document.documentElement.style.setProperty("--background-color", "#0a192f");
        document.documentElement.style.setProperty("--primary-font-color", "#90a4ae");
        document.documentElement.style.setProperty("--secondary-font-color", "#6fffe9");
        let x = 0;
        while (x < 5) {
            neomorphism[x].style.boxShadow = "0.4vw 0.4vw 0.5vw #020d22, -0.4vw -0.4vw 0.5vw #151e35";
            x++;
        }
        let y = 0;
        while (y < 2) {
            reverseNeomorphism[y].style.boxShadow = "inset 0.4vw 0.4vw 0.5vw #020d22, inset -0.4vw -0.4vw 0.5vw #151e35";
            y++;
        }
    }
}
