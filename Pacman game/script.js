var blockImg;
var foodImg;
var powerImg;
var angrypacmanImg;
var enem1Img;
var enem2Img;
var enem3Img;
var enem1ImgWeak;
var enem2ImgWeak;
var enem3ImgWeak;
var block2Img;
var angrypacman = {instance: null, frame: 0, direction: 0};
var blocks = [];
var food = [];
var powers = [];
var enemies = [];
var activeEnemies = [];
var maze;
var p5 = new p5();
var standarSize = 40;

function preload() {
  blockImg = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/block.png');
  block2Img = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/block2.JPG');
  foodImg = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/food.png');
  powerImg = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/power.png');
  angrypacmanImg = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/pacman_tile.png');
  enem1Img = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost1.png');
  enem2Img = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost2.png');
  enem3Img = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost3.png');
  enem1ImgWeak = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost1fear.png');
  enem2ImgWeak = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost2fear.png');
  enem3ImgWeak = loadImage('https://raw.githubusercontent.com/TG922/pacman-game-assets/main/ghost3fear.png');
}

function setup() {
  createCanvas(882, 562);
  maze = new Maze();
  for(var i = 0; i < maze.rows; i++) {
    for(var j = 0; j < maze.cols; j++) {
      if(maze.maze[i][j] === '*') {
        blocks.push(new Element(j * standarSize,i * standarSize, blockImg, angrypacman));
      }
      else if(maze.maze[i][j] === '+') {
        blocks.push(new Element(j * standarSize,i * standarSize, block2Img, angrypacman));
      }
      else if(maze.maze[i][j] === '-') {
        food.push(new Element(j * (standarSize + 1),i * (standarSize + 1), foodImg, angrypacman));
      }
      else if(maze.maze[i][j] === 'x') {
        powers.push(new Element(j * standarSize,i * standarSize, powerImg, angrypacman));
      }
      else if(maze.maze[i][j] === 'p') {
        angrypacman.instance = new Element(j * standarSize,i * standarSize, angrypacmanImg, angrypacman);
      }
      else if(maze.maze[i][j] === 'e1') {
        enemies.push(new Element(j * standarSize,i * standarSize, enem1Img, angrypacman));
      }
      else if(maze.maze[i][j] === 'e2') {
        enemies.push(new Element(j * standarSize,i * standarSize, enem2Img, angrypacman));
      }
      else if(maze.maze[i][j] === 'e3') {
        enemies.push(new Element(j * standarSize,i * standarSize, enem3Img, angrypacman));
      }
    }
  }
  enemOutInterval(5000);
}

function draw() {
  background(0,0,0);
  enem1ImgWeak.filter("gray");
  enem2ImgWeak.filter("gray");
  enem3ImgWeak.filter("gray");
  for(var i = 0; i < blocks.length; i++) {
    blocks[i].show();
  }
  for(var i = 0; i < food.length; i++) {
    food[i].show();
  }
  for(var i = 0; i < powers.length; i++) {
    powers[i].show();
  }
  for(var i = 0; i < enemies.length; i++) {
    enemies[i].show();
  }
  for(var i = 0; i < activeEnemies.length; i++) {
    frameRate(8);
    activeEnemies[i].moveenem(blocks);
    activeEnemies[i].show();

    if(angrypacman.instance.enemPackmanColission(activeEnemies[i])) {
      if(activeEnemies[i].isWeak === true) {
        var activeInitX = activeEnemies[i].initx;
        var activeInitY = activeEnemies[i].inity;
        activeEnemies.splice(i, 1);
        enemies.push(new Element(activeInitX, activeInitY, eval("enem"+(i+1)+"Img"), angrypacman));
        document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 100;
      } else {
        alert(" GAME OVER ");
        window.location.reload();
      }
    }
  }
  angrypacman.instance.showPac();
  for(var i = 0; i < food.length; i++) {
    if(angrypacman.instance.eatPac(food[i])) {
      food.splice(i, 1);
    }
  }
  for(var i = 0; i < powers.length; i++) {
    if(angrypacman.instance.eatPower(powers[i])) {
      powers.splice(i, 1);
      makeWeak();
    }
  }

  if(food.length <= 0) {
    alert(" You WIN!!! ");
    window.location.reload();
  }
}

function makeWeak() {
  for(var i = 0; i < activeEnemies.length; i++) {
    activeEnemies[i].image = eval("enem"+(i+1)+"ImgWeak");
    activeEnemies[i].isWeak = true;
  }
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    if(maze.maze[angrypacman.instance.y/standarSize][angrypacman.instance.x/standarSize + 1] !== '*') {
      angrypacman.instance.movePac(0);
    }
  }
  else if(keyCode === DOWN_ARROW) {
    if(maze.maze[angrypacman.instance.y/standarSize + 1][angrypacman.instance.x/standarSize] !== '*') {
      angrypacman.instance.movePac(1);
    }
  }
  else if(keyCode === LEFT_ARROW) {
    if(maze.maze[angrypacman.instance.y/standarSize][angrypacman.instance.x/standarSize - 1] !== '*') {
      angrypacman.instance.movePac(2);
    }
  }
  else if(keyCode === UP_ARROW) {
    if(maze.maze[angrypacman.instance.y/standarSize - 1][angrypacman.instance.x/standarSize] !== '*') {
      angrypacman.instance.movePac(3);
    }
  }
}

function enemOutInterval(interval) {
  setInterval(function() {
    if(enemies.length > 0) {
      var eout = enemies.pop();
      eout.isWeak = false;
      eout.enemOut(maze);
      activeEnemies.push(eout);
    }
  }, interval);
}


//ELEMENT: BLOCK, FOOD, POWER, PACMAN, enem

function Element(x, y, image, character) {
  this.x = x;
  this.y = y;
  this.initx = this.x;
  this.inity = this.y;
  this.image = image;
  this.imageWeak = image;
  this.frame = character.frame
  this.direction = character.direction;
  this.pacRadius = 16;
  this.foodRadius = 9;
  this.powerRadius = 6;
  this.enemRadius = 18;
  this.blockRadius = 6;
  this.enemMovement = true;
  this.isWeak = false;

  this.show = function() {
      p5.image(this.image, this.x, this.y);    
  }

  this.showPac = function() {
    p5.image(this.image.get(standarSize * this.frame++,this.direction * standarSize,standarSize,standarSize), this.x, this.y);
    this.frame = this.frame === 8 ? 0 : this.frame;
  }

  this.movePac = function(d) {
    this.direction = d;
    if (this.direction === 0) {
      this.x += standarSize;
    }
    else if (this.direction === 1) {
      this.y += standarSize;
    }
    else if (this.direction === 2) {
      this.x -= standarSize;
    }
    else if (this.direction === 3) {
      this.y -= standarSize;
    }
  }

  this.moveenem = function(blocks) {
    if(this.enemMovement === false) {
      var d = Math.floor((Math.random() * 4));
      this.direction = d;
    }
    var lastx = this.x;
    var lasty = this.y
    if (this.direction === 0) {
      this.x += standarSize;
    }
    else if (this.direction === 1) {
      this.y += standarSize;
    }
    else if (this.direction === 2) {
      this.x -= standarSize;
    }
    else if (this.direction === 3) {
      this.y -= standarSize;
    }
    for(var i = 0; i < blocks.length; i++) {
      if(this.enemBlockColission(blocks[i])){
        this.x = lastx;
        this.y = lasty;
        this.enemMovement = false;
        this.moveenem(blocks); 
      } else {
        this.enemMovement = true;
      }
    }
  }

  this.enemBlockColission = function(b) {
    var dis = dist(this.x, this.y, b.x, b.y);
    if((dis) < (this.enemRadius + b.blockRadius) || (this.x + (this.enemRadius * 2)) > (maze.cols * (this.enemRadius * 2)) || (this.x - (this.enemRadius * 2)) < 0 || (this.y + (this.enemRadius * 2)) > (maze.rows * (this.enemRadius * 2)) || (this.y - (this.enemRadius * 2)) < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.enemPackmanColission = function(e) {
    var dis = dist(this.x, this.y, e.x, e.y);
    if((dis) < (this.pacRadius + e.enemRadius)) {
      return true;
    } else {
      return false;
    }
  }

  this.enemOut = function(m) {
    for(var i = 0; i < m.rows; i++) {
      for(var j = 0; j < m.cols; j++) {
        if(m.maze[i][j] === 'eout') {
          this.y -= 80;
          break;
        }
      }
    }
  }

  this.eatPac = function (f) {
    var dis = dist(this.x, this.y, f.x, f.y);
    if(dis < this.pacRadius + f.foodRadius) {
      document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 10;
      return true;
    } else {
      return false;
    }
  }

  this.eatPower = function (p) {
    var dis = dist(this.x, this.y, p.x, p.y);
    if(dis < this.pacRadius + p.powerRadius) {
      return true;
    } else {
      return false;
    }
  }
}



//MAZE

function Maze() {
  var levels = [];
  levels.push(
    [
      ['*','*','*','*','-','-','-','-','*','*','*','*','*','*','*','*','*','*','*','-','-','*'],
      ['*','-','-','-','-','-','-','-','-','-','-','*','*','x','-','-','-','-','-','-','-','-'],
      ['*','-','*','*','-','*','-','*','*','-','-','*','*','-','-','*','*','-','-','*','-','*'],
      ['*','-','*','*','-','-','-','*','*','-','p','-','-','-','-','*','*','-','-','-','-','*'],
      ['-','-','x','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['-','-','*','*','-','-','-','*','-','-','*','*','*','*','-','-','*','-','-','-','-','*'],
      ['-','-','-','-','-','*','-','*','-','-','-','*','*','-','-','-','*','-','-','*','-','-'],
      ['-','-','-','-','-','-','-','*','*','*','-','*','*','-','*','*','*','-','-','-','-','-'],
      ['-','*','*','*','-','-','-','*','x','-','eout','eout','eout','-','-','-','*','-','-','-','-','*'],
      ['*','*','','*','-','-','-','*','-','*','*','-','-','*','*','-','*','-','-','-','-','*'],
      ['*','*','','*','x','*','-','-','-','*','e1','e2','e3','','*','-','-','-','-','*','-','*'],
      ['-','*','*','*','-','-','-','-','-','*','','','','','*','-','x','-','-','-','-','*'],
      ['-','-','-','-','-','-','-','*','-','*','*','*','*','*','*','-','*','-','-','-','-','-'],
      ['-','*','*','*','-','*','-','*','-','-','-','-','-','-','-','-','*','-','-','*','-','-']
    ]
  );

  levels.push(
    [
      ['-','*','*','*','-','*','-','*','-','-','-','-','-','-','-','-','*','-','-','*','-','-'],
      ['-','-','-','*','-','-','-','*','-','-','eout','eout','eout','-','-','-','*','-','-','-','-','*'],
      ['-','-','-','*','-','*','x','*','-','*','*','*','*','*','-','-','-','-','*','*','-','*'],
      ['-','*','*','*','-','*','-','*','-','*','e1','e2','e3','*','-','-','*','x','-','-','-','*'],
      ['-','-','-','-','-','*','-','*','-','*','*','*','*','*','-','-','*','-','-','-','-','-'],
      ['*','-','-','-','-','*','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
      ['*','-','*','*','-','*','-','*','*','-','-','*','*','-','-','*','*','-','-','*','-','*'],
      ['*','-','*','*','-','-','-','*','*','p','-','-','-','-','-','*','*','-','-','-','-','*'],
      ['-','-','x','-','-','-','-','-','-','-','-','-','-','-','-','-','-','*','*','*','*','*'],
      ['-','-','*','*','-','-','-','*','-','-','*','*','*','*','-','-','*','-','-','-','-','*'],
      ['-','-','-','-','-','*','-','*','-','-','*','','','*','-','-','*','-','-','*','-','*'],
      ['-','-','-','-','-','-','-','*','*','*','*','*','*','*','*','*','*','-','-','-','-','*'],
      ['-','*','*','*','-','-','-','-','-','-','-','x','-','-','-','-','-','-','-','-','-','*'],
      ['-','*','*','*','-','*','-','*','-','-','-','-','-','-','-','-','*','x','-','*','-','*']
      
    ]
  );
  this.rows = 14;
  this.cols = 22;


  //Select Level From Here

  this.maze = levels[0];


  //Just Change Level's Index

  this.show = function() {
    p5.image(this.image, this.x, this.y);
  }
}