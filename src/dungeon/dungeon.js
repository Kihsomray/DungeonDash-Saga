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

        // create a 2d array of cells
        for (let i = 0; i < env.MAP.SIZE.width; i++) this.cells.push([]);


        // document.getElementById("game").getContext("2d").drawImage(
            //     ASSET_MANAGER.getImage("*"),
            //     this.tiles["f-1"].x * 16,
            //     this.tiles["f-1"].y * 16,
            //     16,
            //     16,
            //     16,
            //     16,
            //     32,
            //     32
            // );
            
        
    }
        
        
    init() {

        for (let i = 0; i < env.MAP.SIZE.width; i++) {

            const left = i == 0;
            const right = i == env.MAP.SIZE.width - 1;


            for (let j = 0; j < HEIGHT; j++) {

                const top = j == 0 && i != 0 && i != env.MAP.SIZE.width - 1;

                document.getElementById("game").getContext("2d").drawImage(
                    ASSET_MANAGER.getImage("*"),
                    this.tiles[left ? "w-w-1" : (top ? "w-n-1" : right ? "w-e-1" : "f-1")].x * 16,
                    this.tiles[left ? "w-w-1" : (top ? "w-n-1" : right ? "w-e-1" : "f-1")].y * 16 - (top ? 8 : 0),
                    16,
                    top ? 24 : 16,
                    16 + i * 16 * env.SCALE,
                    16 + j * 16 * env.SCALE - (top ? 8 : 0),
                    16 * env.SCALE,
                    (top ? 24 : 16) * SCALE
                );

            }

            const edge = left || right;

            document.getElementById("game").getContext("2d").drawImage(
                ASSET_MANAGER.getImage("*"),
                this.tiles["w-n-1"].x * HEIGHT + 16 + (left ? 11 : 0) * SCALE,
                this.tiles["w-n-1"].y * 16 - 8,
                edge ? 5 : 16,
                24,
                16 + (left ? 11 : 0) * SCALE + i * 16 * SCALE,
                16 + HEIGHT * 16 * SCALE - 8,
                (edge ? 5 : 16) * SCALE,
                24 * SCALE
            );

        }

    }


}