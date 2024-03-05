class Map {

    cells;

    constructor() {

        this.cells = [];
        for (let i = 0; i < env.MAP.SIZE.width; i++) {
            this.cells[i] = [];
            for (let j = 0; j < env.MAP.SIZE.height; j++) {
                this.cells[i][j] = new Tile(this, i, j, new Wall());
            }
        }

    }

    isPassable(x, y) {
        return this.getCellAt(x, y).type instanceof Passable;
    }


    getCellAt(x, y) {
            
        if (x < 0 || x >= env.MAP.SIZE.width || y < 0 || y >= env.MAP.SIZE.height) {
            return null;
        }
        return this.cells[x][y];

    }


}