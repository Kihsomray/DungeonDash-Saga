// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011
class GameEngine {

    player;
    entities = [];
    chunks = new Set();

    // Clicked: esc, w, d, s, a, shift, alt, e, space
    keyClick = {
        "Escape": false,
        "w": false,
        "d": false,
        "s": false,
        "a": false
    };

    keyClickCooldowns = new Map();

    // Clicked: left, middle, right
    mouseClick = [false, false, false];

    // Mouse location: x, y
    mouseLocation = { x: env.X_CENTER, y: env.Y_CENTER };

    mouseTile = { x: 0, y: 0 };
    mouseChunk = { x: 0, y: 0 };

    // Constructor
    constructor() {

        document.addEventListener("visibilitychange", function () {

            if (document["hidden"]) {

                this.keyClick = {
                    "Escape": false,
                    "w": false,
                    "d": false,
                    "s": false,
                    "a": false
                };

            }

        });

    };

    init() {
        this.startInput();
        this.timer = new Timer();
    };

    #updateMouseLocation = e => {
        this.mouseLocation = {
            x: e.clientX,
            y: e.clientY
        };
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            window.requestAnimationFrame(gameLoop, env.CTX.canvas);
        };
        gameLoop();
    };

    startInput() {

        env.CTX.canvas.addEventListener("mousemove", this.#updateMouseLocation);

        env.CTX.canvas.addEventListener("mousedown", (e) => {

            if (this.keyClickCooldowns.has(e.button) || !(Date.now() - this.keyClickCooldowns.get(e.button) < 100)) {
                this.mouseClick[e.button] = true
                this.keyClickCooldowns.set(e.button, Date.now());
            }
        });

        env.CTX.canvas.addEventListener("mouseup", (e) => this.mouseClick[e.button] = this.mouseHold[e.button] = false);

        env.CTX.canvas.addEventListener("wheel", e => e.preventDefault());

        window.addEventListener("keydown", e => {

            if (this.keyClickCooldowns.has(e.key.toLowerCase()) || !(Date.now() - this.keyClickCooldowns.get(e.key.toLowerCase()) < 100)) {
                this.keyClick[e.key.toLowerCase()] = true;
                this.keyClickCooldowns.set(e.key.toLowerCase(), Date.now());
            }
        
        });
        window.addEventListener("keyup", event => this.keyClick[event.key.toLowerCase()] = false);
    };


    draw() {



    };

    update() {

        this.chunks.forEach(chunk => chunk.update());

    };


    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};