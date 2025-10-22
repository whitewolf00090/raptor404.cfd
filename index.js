const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Example characters
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array to store the y-position of each column's falling character
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1; // Start each column at the top
}

function draw() {
    // Semi-transparent black rectangle to create the fading trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green color for the characters
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset the drop to the top if it reaches the bottom or a random point
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment the y-position of the drop
        drops[i]++;
    }
}

// Animate the effect
setInterval(draw, 33); // Adjust speed as needed
