//ENGINE = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("*", "./res/tileset.png");

const MAP_MANAGER = new MapManager();

ASSET_MANAGER.downloadAll(() => {
	
	
	MAP_MANAGER.init();


	// ENGINE.init(ctx);
	// ENGINE.start();

});
