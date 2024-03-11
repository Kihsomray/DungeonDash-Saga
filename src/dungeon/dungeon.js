WIDTH = 16;
HEIGHT = 9;

class MapManager{

    cells = [];
    won = false;

    tiles = {

        "w-n-1": {x: 2, y: 1},
        "w-w-1": {x: 3, y: 10},
        "w-e-1": {x: 2, y: 10},

        "f-1": {x: 1, y: 4},
        "f-2": {x: 2, y: 4},
        "f-3": {x: 3, y: 4},
        "f-4": {x: 1, y: 5},
        "f-5": {x: 2, y: 5},
        "f-6": {x: 3, y: 5},
        "f-7": {x: 1, y: 6},
        "f-8": {x: 2, y: 6}

    }

    constructor(difficulty) {

        env.MAP.SIZE.width = 16 * difficulty + 16;
        env.MAP.SIZE.height = 9 * difficulty + 9;

        if (difficulty == 0) {
            this.time = 15;
            env.SCALE = 2.3;
        } else if (difficulty == 1) {
            this.time = 20;
            env.SCALE = 1.15;
        } else if (difficulty == 2) {
            this.time = 30;
            env.SCALE = 0.76;
        }

        this.finish = Date.now() + this.time * 1000;

        this.x = env.CENTER.x - 16 * env.SCALE * env.MAP.SIZE.width / 2;
        this.y = env.CENTER.y - 16 * env.SCALE * env.MAP.SIZE.height / 2;
        this.cells = new MapGenerator(this, env.MAP.SIZE.width, env.MAP.SIZE.height, null).generate();
        console.log(env.CENTER)
            
    }
        
        
    init() {

        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j].update();
                this.cells[i][j].draw();
            }
        }

    }

    update() {
        this.x = env.CENTER.x - 16 * env.SCALE * env.MAP.SIZE.width / 2;
        this.y = env.CENTER.y - 16 * env.SCALE * env.MAP.SIZE.height / 2;
        this.cells.forEach(tile => tile.forEach(c => c.update()));
    }

    draw() {
        // display the current time above the map
        env.CTX.fillStyle = "black";
        env.CTX.font = "16px Arial";
        env.CTX.fillText("Time remaining: " + Math.floor((this.finish - Date.now()) / 1000), env.CENTER.x - 68, this.y - 8);

        this.cells.forEach(tile => tile.forEach(c => c.draw()));

        // if time is up, display black screen with "Game Over" message, you lost
        if (Date.now() > this.finish || this.won) {
            env.CTX.fillStyle = "black";
            env.CTX.fillRect(0, 0, env.CTX.canvas.width, env.CTX.canvas.height);
            env.CTX.fillStyle = "white";
            env.CTX.font = "48px Arial";
            env.CTX.fillText("Game Over", env.CENTER.x - 128, env.CENTER.y);
            env.CTX.fillStyle = this.won ? "lime" : "red";
            env.CTX.font = "28px Arial";
            env.CTX.fillText(this.won ? "You won!" : "You lost", env.CENTER.x - 48, env.CENTER.y + 30);
        }
    }


}