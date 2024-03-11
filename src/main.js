//ENGINE = new GameEngine();

const ASSETS = new AssetManager();

ASSETS.queueDownload("*", "./res/tileset.png");

let MAP;

ASSETS.downloadAll(() => {
	
	MAP = new MapManager();
	MAP.init();


	// ENGINE.init(ctx);
	// ENGINE.start();

});
