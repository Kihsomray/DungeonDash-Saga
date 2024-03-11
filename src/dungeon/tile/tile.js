env.TILES =  {
        
    "r-1": {
        x: 1,
        y: 4
    },

    
    "c-1": {
        x: 2,
        y: 4
    },
    "c-2": {
        x: 3,
        y: 4
    },
    "c-3": {
        x: 1,
        y: 5
    },
    "c-4": {
        x: 2,
        y: 5
    },
    "c-5": {
        x: 3,
        y: 5
    },
    "c-6": {
        x: 1,
        y: 6
    },
    "c-7": {
        x: 2,
        y: 6
    },
    "c-8": {
        x: 3,
        y: 6
    },

}

class Tile {

    asset = ASSETS.getImage("*");

    player;

    map;
    tileX;
    tileY;
    type;
    x; // center of the tile
    y; // center of the tile
    edge;

    constructor(map, tileX, tileY) {

        this.map = map;
        this.tileX = tileX;
        this.tileY = tileY;
        this.neighbors = new Array(4);

        //console.log(this.map.x, this.map.y, this.tileX, this.tileY)
        this.x = this.map.x + this.tileX * 16 * env.SCALE + 8 * env.SCALE;
        this.y = this.map.y + this.tileY * 16 * env.SCALE + 8 * env.SCALE;
        this.type = new Wall(this);
        this.edge = false;

    }

    update() {

        this.x = this.map.x + this.tileX * 16 * env.SCALE + 8 * env.SCALE;
        this.y = this.map.y + this.tileY * 16 * env.SCALE + 8 * env.SCALE;

        if (this.player) {
            if (this.neighbors[1] && GAME.keyClick["w"] && (this.neighbors[1].type instanceof Passable || this.neighbors[1].type instanceof Door)) {
                this.neighbors[1].player = this.player;
                this.player = null;
                GAME.keyClick["w"] = false;
            } else if (this.neighbors[2] && GAME.keyClick["a"] && (this.neighbors[2].type instanceof Passable || this.neighbors[2].type instanceof Door)) {
                this.neighbors[2].player = this.player;
                this.player = null;
                GAME.keyClick["a"] = false;
            } else if (this.neighbors[3] && GAME.keyClick["s"] && (this.neighbors[3].type instanceof Passable || this.neighbors[3].type instanceof Door)) {
                this.neighbors[3].player = this.player;
                this.player = null;
                GAME.keyClick["s"] = false;
            } else if (this.neighbors[0] && GAME.keyClick["d"] && (this.neighbors[0].type instanceof Passable || this.neighbors[0].type instanceof Door)) {
                this.neighbors[0].player = this.player;
                this.player = null;
                GAME.keyClick["d"] = false;
            }
        }
        this.type.update();

    }

    draw() {

        this.type.draw();
        if (this.player) this.player.draw(this.x - 8 * env.SCALE, this.y - 16 * env.SCALE);

    }

}