// Max width and height of the canvas
const maxWidth = 960 * 2;
const maxHeight = 540 * 2;

// Min width and height of the canvas
const minWidth = 960 * 1.5;
const minHeight = 540 * 1.5;

let X_CENTER = 0;
let Y_CENTER = 0;

const SCALE = 2;

// Get the canvas element
const canvas = $("#game")[0];

// Resize the canvas
function resizeCanvas() {

    const canvas = document.getElementById("game");
	const ctx = canvas.getContext("2d");

    const width = $("#container").width() - 16;
    const height = $("#container").height() - $("#header").height() - $("#footer").height() - 16;

    canvas.width = Math.max(Math.min(width, maxWidth), minWidth);
    canvas.height = Math.max(Math.min(height, maxHeight), minHeight);

    ctx.scale(2, 2);
    ctx.imageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.oImageSmoothingEnabled = false;

    X_CENTER = ctx.canvas.width / 2 / SCALE;
    Y_CENTER = ctx.canvas.height / 2 / SCALE;
    
}

// Center the canvas on window resize
$(window).resize(resizeCanvas);

// Initial resizing & centering
resizeCanvas();
