class MapGenerator {

    height;
    width;
    hero;
    cells;
    walls;
    roomCounter;
    entrance;
    exit;

    constructor(map, width, height, hero) {

        this.width = width;
        this.height = height;
        this.hero = hero;

        this.cells = [];
        for (let i = 0; i < this.width; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.cells[i][j] = new Tile(map, i, j);
            }
        }
        this.walls = [];
        this.roomCounter = 0;

    }

    generate() {

        this.walls = [];
        this.roomCounter = 1;
        this.cells[1][1].type = this.entrance = new Door(this.cells[1][1], true);
        this.cells[1][1].player = new Hero("Priestess");
        this.addSurrounding(1, 1);

        
        while (this.walls.length > 0) {
            
            //console.log(this.walls.length)

            const loc = Math.floor(Math.random() * this.walls.length);
            //console.log(loc, this.walls.length);
            const wall = this.walls.splice(loc, 1)[0];

            const x = wall.tileX;
            const y = wall.tileY;

            //console.log(x, y)

            if (this.checkSurrounding(x, y)) {

                //console.log("surrounding", x, y)

                this.cells[x][y].type = new Passable(this.cells[x][y]);
                this.roomCounter++;
                this.addSurrounding(x, y);

            }

        }

        // loop backwards and find a splot to place the exit
        for (let i = this.cells.length - 1; i >= 0; i--) {
            for (let j = this.cells[i].length - 1; j >= 0; j--) {
                if (this.cells[i][j].type instanceof Passable) {
                    this.cells[i][j].type = this.exit = new Door(this.cells[i][j]);
                    return this.cells;
                }
            }
        }

        //this.generateEntities();
        return this.cells;
    }

    addSurrounding(x, y) {
        const cell = this.cells[x][y];

        const north = this.addIfWall(x, y + 1);
        cell.neighbors[3] = north;
        if (north) north.neighbors[1] = cell;

        const east = this.addIfWall(x + 1, y);
        cell.neighbors[0] = east;
        if (east) east.neighbors[2] = cell;

        const south = this.addIfWall(x, y - 1);
        cell.neighbors[1] = south;
        if (south) south.neighbors[3] = cell;

        const west = this.addIfWall(x - 1, y);
        cell.neighbors[2] = west;
        if (west) west.neighbors[0] = cell;

    }

    addIfWall(x, y) {
        const wall = this.getCellAt(x, y);
        const wallOff = this.getCellAt(x, y, 1);
        if (!wall && wallOff) {
            wallOff.edge = true;
            return wallOff;
        }
        if (!wall) return null;
        if (wall.type instanceof Wall) {
            this.walls.push(wall);
            return wall;
        } else if (wall.type instanceof Passable || wall.type instanceof Door) return wall;
        return null;
    }

    checkSurrounding(x, y) {
        let found = 0;
        let corner = 0;
        if (this.isPassable(x, y + 1)) found++;
        if (this.isPassable(x + 1, y)) found++;
        if (this.isPassable(x, y - 1)) found++;
        if (this.isPassable(x - 1, y)) found++;
        if (this.isPassable(x + 1, y + 1)) corner++;
        if (this.isPassable(x + 1, y - 1)) corner++;
        if (this.isPassable(x - 1, y - 1)) corner++;
        if (this.isPassable(x - 1, y + 1)) corner++;
        return found <= 1 && corner + found <= 2;
    }

    isPassable(x, y) {
        return this.getCellAt(x, y) && (this.getCellAt(x, y).type instanceof Passable || this.getCellAt(x, y).type instanceof Door);
    }


    getCellAt(x, y, offset = 0) {
        if (x < 1 - offset || x >= this.width - 1 + offset || y < 1 - offset || y >= this.height - 1 + offset) return null;
        return this.cells[x][y];
    }


}