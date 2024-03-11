env.ITEMS = {

    0: {
        name: "Abstraction",
        assetLocation: {
            x: 288,
            y: 352,
            height: 16,
            width: 16,
        },
        collectable: true,
    },
    1: {
        name: "Encapsulation",
        assetLocation: {
            x: 304,
            y: 352,
            height: 16,
            width: 16,
        },
        collectable: true,
    },
    2: {
        name: "Inheritance",
        assetLocation: {
            x: 320,
            y: 352,
            height: 16,
            width: 16,
        },
        collectable: true,
    },
    3: {
        name: "Polymorphism",
        assetLocation: {
            x: 336,
            y: 352,
            height: 16,
            width: 16,
        },
        collectable: true,
    },
    4: {
        name: "Health Potion",
        assetLocation: {
            x: 288,
            y: 336,
            height: 16,
            width: 16,
        },
        collectable: false
    },
    5: {
        assetLocation: {
            name: "Vision Potion",
            x: 304,
            y: 336,
            height: 16,
            width: 16,
        },
        collectable: false
    },
}

class Item {

    item;
    x;
    y;
    inventory = false;

    constructor(item, x, y) {

        this.item = item;
        this.x = x;
        this.y = y;

    }

    update() {

    }

    draw() {

        env.CTX.drawImage(
            ASSETS.getImage("*"),
            this.item.assetLocation.x,
            this.item.assetLocation.y,
            this.item.assetLocation.width,
            this.item.assetLocation.height,
            this.x - this.item.assetLocation.width / 2,
            this.y - this.item.assetLocation.height / 2,
            this.inventory ? 16 : 8,
            this.inventory ? 16 : 8
        );

    }


}