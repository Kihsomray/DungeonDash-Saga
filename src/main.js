let GAME;
let ASSETS;
let MAP;



resizeCanvas();

GAME = new GameEngine();
ASSETS = new AssetManager();

ASSETS.queueDownload("*", "./res/tileset.png");

ASSETS.downloadAll(() => {

	GAME.init();

	MAP = new MapManager(0);
	MAP.init();
	GAME.start();
	// ENGINE.init(ctx);
	// ENGINE.start();

});

document.getElementById("easy").addEventListener("click", function() {
	MAP = new MapManager(0);
});

document.getElementById("medium").addEventListener("click", function() {
	MAP = new MapManager(1);
});

document.getElementById("hard").addEventListener("click", function() {
	MAP = new MapManager(2);
});


