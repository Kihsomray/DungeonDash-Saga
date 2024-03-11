class Door {

    tile;
    entrance = false;

    loc = {
        x: 48,
        y: 96
    }

    constructor(tile, entrance = false) {
            
        this.tile = tile;
        this.entrance = entrance;

    }

    update() {
    }

    draw() {
        
        env.CTX.drawImage(
            this.tile.asset,
            this.loc.x,
            this.loc.y,
            16,
            16,
            this.tile.x - 8 * env.SCALE,
            this.tile.y - 8 * env.SCALE,
            16 * env.SCALE,
            16 * env.SCALE
        );
    }
    

}