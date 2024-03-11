env.WALLS = {

    0: {
        0: {
            0: {
                x: 93,
                y: 164,
            },
            1: {
                x: 82,
                y: 163,
            },
        },
        1: {
            0: {
                x: 84,
                y: 164,
            },
            1: {
                x: 82,
                y: 164,
            },
        },
    },

    1: {
        0: {
            0: {
                x: 70,
                y: 161,
            },
            1: {
                x: 64,
                y: 164,
            },
        },
        1: {
            0: {
                x: 70,
                y: 163,
            },
            1: {
                x: 70,
                y: 164,
            },
        },
    },
    2: {
        0: {
            0: {
                x: 6,
                y: 165,
            },
            1: {
                x: 27,
                y: 165,
            },
        },
        1: {
            0: {
                x: 39,
                y: 133,
            },
            1: {
                x: 70,
                y: 165,
            },
        },
    },

    3: {
        0: {
            0: {
                x: 18,
                y: 165,
            },
            1: {
                x: 49,
                y: 133,
            },
        },
        1: {
            0: {
                x: 34,
                y: 165,
            },
            1: {
                x: 82,
                y: 165,
            },
        },
    },

}

class Wall {

    tile;

    q0 = env.WALLS[0][0][0];
    q1 = env.WALLS[1][0][0];
    q2 = env.WALLS[2][0][0];
    q3 = env.WALLS[3][0][0];


    constructor(tile) {

        this.tile = tile;

    }

    updateWall(neighbors) {

        const n0 = neighbors[0] instanceof Wall || neighbors[0] == null && this.tile.tileX != env.MAP.SIZE.width - 1 ? 1 : 0;
        const n1 = neighbors[1] instanceof Wall || neighbors[1] == null && this.tile.tileY != 0 ? 1 : 0;
        const n2 = neighbors[2] instanceof Wall || neighbors[2] == null && this.tile.tileX != 0 ? 1 : 0;
        const n3 = neighbors[3] instanceof Wall || neighbors[3] == null && this.tile.tileY != env.MAP.SIZE.height - 1 ? 1 : 0;

        this.q0 = env.WALLS[0][n0][n1];
        this.q1 = env.WALLS[1][n1][n2];
        this.q2 = env.WALLS[2][n2][n3];
        this.q3 = env.WALLS[3][n3][n0];

    }

    update() {

        this.updateWall(this.tile.neighbors);

    }

    draw() {

        env.CTX.drawImage(
            ASSETS.getImage("*"),
            16,
            64,
            16,
            16,
            this.tile.x - 8 * env.SCALE,
            this.tile.y - 8 * env.SCALE,
            16 * env.SCALE,
            16 * env.SCALE
        );

        env.CTX.drawImage(
            this.tile.asset,
            this.q0.x,
            this.q0.y,
            8,
            1,
            this.tile.x,
            this.tile.y - 8 * env.SCALE,
            8 * env.SCALE,
            1 * env.SCALE
        );

        env.CTX.drawImage(
            this.tile.asset,
            this.q1.x,
            this.q1.y,
            8,
            1,
            this.tile.x - 8 * env.SCALE,
            this.tile.y - 8 * env.SCALE,
            8 * env.SCALE,
            1 * env.SCALE
        );

        env.CTX.drawImage(
            this.tile.asset,
            this.q2.x,
            this.q2.y,
            8,
            15,
            this.tile.x - 8 * env.SCALE,
            this.tile.y - 7 * env.SCALE,
            8 * env.SCALE,
            15 * env.SCALE
        );

        env.CTX.drawImage(
            this.tile.asset,
            this.q3.x,
            this.q3.y,
            8,
            15,
            this.tile.x,
            this.tile.y - 7 * env.SCALE,
            8 * env.SCALE,
            15 * env.SCALE
        );

    }

}