const text = "Essence is free.";
const textContainer = document.getElementById("storyText");
// Reserve the full width of the message (plus cursor) from the start, so the line is laid
// out (and centred) as it will be when complete: "[ID]>" stays put and the
// letters appear to its right, like typing at a prompt.
// The extra 15px is the cursor (10px wide, 5px margin in style.css).
document.querySelector(".typed-line").style.minWidth =
    "calc(" + text.length + "ch + 15px)";
let index = 0;

function typeText() {
    if (index < text.length) {
        textContainer.textContent += text[index];
        index++;
        setTimeout(typeText, 200); // Adjust speed here if needed
    }
}

window.onload = () => {
    typeText();
};