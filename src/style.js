// Update global variables
env.CANVAS = document.getElementById("game");
env.CTX = env.CANVAS.getContext("2d");

// Resize the canvas
function resizeCanvas() {

    const width = $("#container").width() - 36;
    const height = $("#container").height() - 64;

    // ensure the bounds of the canvas
    env.CANVAS.width = Math.max(Math.min(width, env.MAX_WIDTH), env.MIN_WIDTH);
    env.CANVAS.height = Math.max(Math.min(height, env.MAX_HEIGHT), env.MIN_HEIGHT);

    // Center the canvas
    env.CENTER.x = env.CANVAS.width / 2 / env.SCALE;
    env.CENTER.y = env.CANVAS.height / 2 / env.SCALE;

    env.CTX.scale(env.SCALE, env.SCALE);

    env.CTX.imageSmoothingEnabled = false;
    env.CTX.webkitImageSmoothingEnabled = false;
    env.CTX.mozImageSmoothingEnabled = false;
    env.CTX.msImageSmoothingEnabled = false;
    env.CTX.oImageSmoothingEnabled = false;

}

// Center the canvas on window resize
$(window).resize(resizeCanvas);

// Initial resizing & centering
resizeCanvas();
