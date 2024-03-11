let GAME;
let ASSETS;
let MAP;



resizeCanvas();

GAME = new GameEngine();
ASSETS = new AssetManager();

ASSETS.queueDownload("*", "./res/tileset.png");

ASSETS.downloadAll(() => {

	GAME.init();

	MAP = new MapManager(new Hero(hero), difficulty, parseInt(time.replace("s", "")));
	MAP.init();
	GAME.start();
	// ENGINE.init(ctx);
	// ENGINE.start();

});

