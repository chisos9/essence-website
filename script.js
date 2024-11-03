const text = "Essence is free.";
const textContainer = document.getElementById("storyText");
let index = 0;

function typeText() {
    if (index < text.length) {
        textContainer.innerHTML += text[index];
        index++;
        setTimeout(typeText, 200); // Adjust speed here if needed
    }
}

window.onload = () => {
    typeText();
};