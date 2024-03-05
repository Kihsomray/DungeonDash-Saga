env.WALLS = {

    0: {
        0: {
            0: {
                x: 84,
                y: 163,
            },
            1: {
                x: 81,
                y: 163,
            },
        },
        1: {
            0: {
                x: 84,
                y: 164,
            },
            1: {
                x: 81,
                y: 164,
            },
        },
    },

    1: {
        0: {
            0: {
                x: 68,
                y: 162,
            },
            1: {
                x: 68,
                y: 164,
            },
        },
        1: {
            0: {
                x: 71,
                y: 163,
            },
            1: {
                x: 71,
                y: 164,
            },
        },
    },
    2: {
        0: {
            0: {
                x: 7,
                y: 164,
            },
            1: {
                x: 29,
                y: 165,
            },
        },
        1: {
            0: {
                x: 40,
                y: 133,
            },
            1: {
                x: 71,
                y: 165,
            },
        },
    },

    3: {
        0: {
            0: {
                x: 17,
                y: 165,
            },
            1: {
                x: 48,
                y: 132,
            },
        },
        1: {
            0: {
                x: 33,
                y: 165,
            },
            1: {
                x: 81,
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

        const n0 = neighbors[0] instanceof Wall || neighbors[0] == null ? 1 : 0;
        const n1 = neighbors[1] instanceof Wall || neighbors[1] == null ? 1 : 0;
        const n2 = neighbors[2] instanceof Wall || neighbors[2] == null ? 1 : 0;
        const n3 = neighbors[3] instanceof Wall || neighbors[3] == null ? 1 : 0;

        this.q0 = env.WALLS[0][n0][n1];
        this.q1 = env.WALLS[1][n1][n2];
        this.q2 = env.WALLS[2][n2][n3];
        this.q3 = env.WALLS[3][n3][n0];

    }

    update() {

        this.updateWall(this.tile.neighbors);

    }

    draw() {

        env.drawImage(
            ASSETS.getImage("*"),
            this.q0.x,
            this.q0.y,
            8,
            1,
            this.tile.x,
            this.tile.y - 8 * env.SCALE,
            8 * env.SCALE,
            1 * env.SCALE
        );

        env.drawImage(
            ASSETS.getImage("*"),
            this.q1.x,
            this.q1.y,
            8,
            1,
            this.tile.x,
            this.tile.y,
            8 * env.SCALE,
            1 * env.SCALE
        );

        env.drawImage(
            ASSETS.getImage("*"),
            this.q2.x,
            this.q2.y,
            8,
            15,
            this.tile.x - 8 * env.SCALE,
            this.tile.y - 7 * env.SCALE,
            8 * env.SCALE,
            15 * env.SCALE
        );

        env.drawImage(
            ASSETS.getImage("*"),
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