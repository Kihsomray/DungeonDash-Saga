WIDTH = 16;
HEIGHT = 9;

class MapManager{

    cells = [];

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

    constructor() {

        console.log(this.x = env.CENTER.x - 16 * env.SCALE * env.MAP.SIZE.width / 2);
        console.log(this.y = env.CENTER.y - 16 * env.SCALE * env.MAP.SIZE.height / 2);
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


}