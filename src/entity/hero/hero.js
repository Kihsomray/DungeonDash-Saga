class Hero {

    hero;
    health;
    lastDamage = 0;

    constructor(name) {

        if (name === "Priestess") this.hero = new Priestess();
        else if (name === "Thief") this.hero = new Thief();
        else if (name === "Warrior") this.hero = new Warrior();

        this.health = this.hero.health;

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

    }

    heal(heal) {

        if (heal < 0) throw new Error("Cannot receive negative heal!");

        let previousHP = this.health;
        this.health = Math.min(this.health + heal, this.hero.health);

        this.lastDamage -= previousHP - this.health;
        this.lastDamage = Math.max(0, this.lastDamage);

    }

    attackEnemy(enemy) {

        this.hero.attack(this, enemy);

    }

    attack(enemy) {

        this.attack(enemy, this.hero.minDamage, this.hero.maxDamage);

    }

    attack(enemy, minDamage, maxDamage) {

        if (this.hero.hitChance < Math.random()) return;

        let damage = Math.random() * (maxDamage - minDamage) + minDamage;
        enemy.damage(damage);

    }

}