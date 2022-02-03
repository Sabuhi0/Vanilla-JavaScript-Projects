const hex = [0, 1, 2, 3, 4, 5, "A", "B", "C", "D"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}