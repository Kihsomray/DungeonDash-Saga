//ENGINE = new GameEngine();

const ASSETS = new AssetManager();

ASSETS.queueDownload("*", "./res/tileset.png");

const MAP = new MapManager();

ASSETS.downloadAll(() => {
	
	
	MAP.init();


	// ENGINE.init(ctx);
	// ENGINE.start();

});
