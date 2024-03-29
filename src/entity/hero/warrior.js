class Warrior {

    health = 575;
    minDamage = 25;
    maxDamage = 60;
    attackSpeed = 4;
    hitChance = 0.8;
    blockChance = 0.2;
    abilityMinDamage = 75;
    abilityMaxDamage = 175;
    abilityChance = 0.4;

    assetLocation = {
        x: 128,
        y: 100,
        frames: 4,
        height: 24,
        width: 16
    }

    constructor() {

    }

    attack(hero, enemy) {

        if (hero.useAbility) {

            if (Math.random() <= hero.abilityChance) 
                hero.attack(enemy, hero.abilityMinDamage, hero.abilityMaxDamage);

            else if (Math.random() <= hero.abilityFailureChance + hero.abilityChance) 
                return;
            
        }

        hero.attack(enemy);

    }

}