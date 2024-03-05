class Animator {

    xOffset = 0;
    yOffset = 0;

    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, frameLines, reverse, loop) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, frameLines, reverse, loop });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;
    };

    drawFrame(x, y) {

        this.elapsedTime += GAME.clockTick;

        if (this.isDone() && !this.loop) return;
        if (this.elapsedTime > this.totalTime) this.elapsedTime = this.elapsedTime % this.totalTime;

        let frame = this.reverse ? this.frameCount - this.currentFrame() - 1 : this.currentFrame();

        let frameX = Math.floor(frame / this.frameLines);
        let frameY = Math.floor(frame / this.frameCount * this.frameLines);

        env.CTX.drawImage(
            this.spritesheet,
            this.xStart + this.width * frameX + this.xOffset * Math.floor(frame % (this.frameCount / this.frameLines)),
            this.yStart + this.height * frameY,
            this.width,
            this.height,
            x,
            y,
            this.width * env.SCALE,
            this.height * env.SCALE
        );

    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return this.elapsedTime >= this.totalTime;
    };

    isTruelyDone() {
        return this.elapsedTime + GAME.clockTick >= this.totalTime;
    }

}