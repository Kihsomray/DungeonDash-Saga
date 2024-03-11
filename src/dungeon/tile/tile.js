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

        this.type.update();

    }

    draw() {

        this.type.draw();

    }

}