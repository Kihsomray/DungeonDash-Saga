const gremlin = new Gremlin();
const ogre = new Ogre();
const skeleton = new Skeleton();

class Enemy {

    enemy;
    x;
    y;
    health;
    animation;

    constructor(x, y) {

        this.enemy = Math.random() < 1 / 3 ? gremlin : Math.random() < 0.5 ? ogre : skeleton;
        this.x = x;
        this.y = y;
        this.health = enemy.health;
        this.animation = new Animation(
            ASSETS.getImage("*"),
            enemy.assetLocation.x,
            enemy.assetLocation.y,
            enemy.assetLocation.width,
            enemy.assetLocation.height,
            enemy.assetLocation.frames,
            0.2,
            1,
            false,
            true
        );

    }

    damage(damage) {

        if (damage < 0) throw new Error("Cannot receive negative damage!");

        let previousHP = this.health;
        this.health -= damage;

        if (this.health <= 0) {
            this.health = 0;
            throw new Error("You died!");
        }

        this.lastDamage = previousHP - this.health;

        this.#heal();

    }

    #heal() {
            
        if (Math.random() < this.enemy.healChance) {
            this.heal(Math.floor(Math.random() * (this.enemy.maxHeal - this.enemy.minHeal) + this.enemy.minHeal));
        }

    }

    heal(heal) {
            
        if (heal < 0) throw new Error("Cannot receive negative heal!");

        let previousHP = this.health;
        this.health = Math.min(this.health + heal, this.enemy.health);

        this.lastDamage -= previousHP - this.health;
        this.lastDamage = Math.max(0, this.lastDamage);

    }



    attack(hero) {

        this.attack(hero, this.enemy.minDamage, this.enemy.maxDamage);

    }

    attack(hero, minDamage, maxDamage) {

        if (this.enemy.hitChance < Math.random()) return;

        let damage = Math.random() * (maxDamage - minDamage) + minDamage;
        hero.damage(damage);

    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        this.animation.drawFrame(this.x, this.y);
    }

}