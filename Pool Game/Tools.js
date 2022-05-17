let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback) {
    if (assetsStillLoading) {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else {
        callback();
    }
}

function loadAssets(callback) {
    function loadSprite(fileName) {
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./Tools/" + fileName;

        spriteImage.onload = function () {
            assetsStillLoading--;
        }
        return spriteImage;
    }
    sprites.background = loadSprite('table.png');
    sprites.stick = loadSprite('stick.png');
    sprites.whiteBall = loadSprite('white_ball.png');
    sprites.yellowBall = loadSprite('yellow_ball.png');
    sprites.redBall = loadSprite('red_ball.png');
    sprites.blackBall = loadSprite('black_ball.png');

    assetsLoadingLoop(callback);
}

function getBallSpriteByColor(color) {
    switch (color) {

        case COLOR.RED:
            return sprites.redBall;

        case COLOR.YELLOW:
            return sprites.yellowBall;

        case COLOR.BLACK:
            return sprites.blackBall;

        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}