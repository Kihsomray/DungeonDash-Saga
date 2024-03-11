let GAME;
let ASSETS;
let MAP;



resizeCanvas();

GAME = new GameEngine();
ASSETS = new AssetManager();

ASSETS.queueDownload("*", "./res/tileset.png");

ASSETS.downloadAll(() => {

	GAME.init();

	MAP = new MapManager("Easy");
	MAP.init();
	GAME.start();
	// ENGINE.init(ctx);
	// ENGINE.start();

});

document.getElementById("easy").addEventListener("click", function() {
	MAP = new MapManager("Easy");
});

document.getElementById("medium").addEventListener("click", function() {
	MAP = new MapManager("Medium");
});

document.getElementById("hard").addEventListener("click", function() {
	MAP = new MapManager("Hard");
});

document.getElementById("insane").addEventListener("click", function() {
	MAP = new MapManager("Insane");
});


