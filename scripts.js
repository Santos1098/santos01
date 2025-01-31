// Configuración básica del lienzo
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.80;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Lógica de dibujo
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

// Herramienta IA (ejemplo básico)
document.getElementById('aiColor').addEventListener('click', async () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // Aquí iría la lógica de IA con TensorFlow.js
    ctx.putImageData(imageData, 0, 0);
});