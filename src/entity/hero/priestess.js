class Priestess {


    health = 315;
    minDamage = 35;
    maxDamage = 55;
    attackSpeed = 5;
    hitChance = 0.7;
    blockChance = 0.3;
    abilityMinHeal = 30;
    abilityMaxHeal = 65;

    assetLocation = {
        x: 128,
        y: 8,
        frames: 4,
        height: 24,
        width: 16
    }

    constructor() {

        this.animation = new Animator(
            ASSETS.getImage("*"),
            this.assetLocation.x,
            this.assetLocation.y,
            this.assetLocation.width,
            this.assetLocation.height,
            this.assetLocation.frames,
            0.2,
            1,
            true,
            true
        );

    }

    attack(hero, enemy) {

        if (hero.useAbility) {

            if (Math.random() <= hero.abilityChance) 
                hero.heal(Math.random() * (this.abilityMaxHeal - this.abilityMinHeal) + this.abilityMinHeal);

            else if (Math.random() <= hero.abilityFailureChance + hero.abilityChance) 
                return;
            
        }

        hero.attack(enemy);

    }

}