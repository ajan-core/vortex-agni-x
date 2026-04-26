// AGNI-X ADVANCED ENGINE
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight; canvas.width = window.innerWidth;
const chars = "VORTEXAGNI01";
const fontSize = 15; const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff4500"; ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 35);

// --- NEW: CAMERA & VOICE SYSTEM ---
function initialize() {
    // Voice Welcome
    const msg = new SpeechSynthesisUtterance("Initializing Vortex Studio. Welcome, Ali Jaan.");
    window.speechSynthesis.speak(msg);

    // Ask for Camera Access
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        alert("Camera Linked Successfully!");
    })
    .catch(function(err) {
        alert("Camera Error: Please allow permissions.");
    });
}

function startRecorder() {
    alert("System Message: 4K Recording Engine is Warm. Ready for VORTEX-AJ.");
    }
        
