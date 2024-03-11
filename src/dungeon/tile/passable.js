class Passable {

    trap = new Animator(ASSETS.getImage("*"), 16, 208, 16, 16, 4, 0.1, 1, false, true);

    neighbors;
    inventory;
    enemy;

    monsterSpawnRate = 0.35;
    trapSpawnRate = 0.10;
    potionSpawnRate = 0.10;

    constructor(tile) {

        this.tile = tile;
        this.neighbors = [];
        this.inventory = [];
        this.enemy = null;
        this.trap = null;

    }

    init(neighbors) {
            
        this.neighbors = neighbors;
        this.randomizeSpawns();

    }

    randomizeSpawns() {

        let count = 0;
            
        if (Math.random() <= this.monsterSpawnRate) {
            count++;
            this.enemy = new Enemy(this.tile.x - 4 * env.SCALE, this.tile.y - 4 * env.SCALE);
        }

        if (Math.random() <= this.trapSpawnRate) {
            count++;
            this.trap = true;
        }

        if (Math.random() <= this.potionSpawnRate) {
            count++;
            this.inventory.push(new HealthPotion(this.tile.x + (count === 1 ? 4 : -4) * env.SCALE, this.tile.y - 4 * env.SCALE));
        }

        if (Math.random() <= this.potionSpawnRate) {
            this.inventory.push(new VisionPotion(this.tile.x + (count === 1 ? 4 : -4) * env.SCALE, this.tile.y + (count === 2 ? 4 : -4) * env.SCALE));
        }

    }

    update() {
            
        if (this.enemy) {
            this.enemy.animation.update();
        }

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

        if (this.trap) {
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
        }

        if (this.enemy) this.enemy.draw();
        this.inventory.forEach(i => i.draw());

    }

}