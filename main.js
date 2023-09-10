let learnMoreButton = document.getElementById("learn-more");
let downArrow = document.querySelector("down-arrow");

let rotateArrow = function() {
    learnMoreButton.querySelector("p").innerHTML = "WERWER";
    downArrow.style.rotate = "0deg";
}

let revertArrow = function() {
    downArrow.style.rotate = "-90deg";
}

learnMoreButton.addEventListener("mouseenter", rotateArrow);
learnMoreButton.addEventListener('mouseleave', revertArrow);
