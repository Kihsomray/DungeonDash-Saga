class Thief {


    health = 425;
    minDamage = 35;
    maxDamage = 85;
    attackSpeed = 6;
    hitChance = 0.8;
    blockChance = 0.4;
    abilitySuccessChance = 0.4;
    abilityFailureChance = 0.2;

    assetLocation = {
        x: 128,
        y: 244,
        frames: 4,
        height: 24,
        width: 16
    }

    constructor() {

    }

    attack(hero, enemy) {
            
        if (hero.useAbility) {

            if (Math.random() <= hero.abilitySuccessChance) 
                hero.attack(enemy);

            else if (Math.random() <= hero.abilityFailureChance + hero.abilitySuccessChance) 
                return;
            
        }

        hero.attack(enemy);

    }

}