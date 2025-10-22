// Get canvas and context
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

// Make canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Matrix characters
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrix = matrixChars.split("");

// Font size and number of columns
const fontSize = 14;
const columns = canvas.width / fontSize;

// Drops — one per column
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

// Drawing the characters
function draw() {
    // Black BG with slight opacity for trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // Green text
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly after it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Animation loop
setInterval(draw, 35);

// Handle resize
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
