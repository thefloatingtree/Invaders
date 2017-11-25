//SPACE INVADERS//
//Jacob Perry//

//VARIABLES & ARRAYS
var bullets = [];       //object arrays
var aliens = [];
var blocks = [];
var powerUps = [];
var particles = [];
var explosions = [];
var fires = [];

var boomTimer = 60;         //misc
var canvasx;
var canvasy;

p5.disableFriendlyErrors = true;

function setup() {
    canvasx = windowSizeCheck(); //Sets size of canvas
    canvasy = windowHeight;

    console.log(canvasx, canvasy);

    createCanvas(canvasx, canvasy);             //BASIC SETUP
    rectMode(CENTER);

    frameRate(60);

    pM = new particleManager();                         //CREATES MANAGERS
    gM = new gameManager();
    sM = new scoreManager();

    scoreDisplay = new Display("Score: ", gM.totalScore, 15, 50, 24, 255, 255, 255, "LEFT");        //DISPLAYS
    levelDisplay = new Display("L ", gM.level, canvasx / 2, 50, 24, 255, 255, 255, "CENTER");
    winLoseDisplay = new Display("", "", canvasx / 2, canvasy / 2 - 50, 28, 255, 0, 0, "CENTER");
    tipDisplay = new Display("", "", canvasx / 2, canvasy / 2 + 10, 20, 255, 255, 255, "CENTER");
    labelDisplay = new Display("Invaders ", gM.version, canvasx - 15, 50, 24, 50, 50, 50, "RIGHT");

    p = new playerObject();

    gM.spawnAliens();
    gM.spawnBlocks();
}

function draw() {
    background(0);                                     //REFRESHES BG
    noStroke();
    fill("red");                                        //DRAWS END GAME LINE
    rect(canvasx / 2, canvasy - 50, canvasx, 5);

    labelDisplay.update(gM.version);
    labelDisplay.render();

    p.render();

    for (var i = 0; i < bullets.length; i++) {          //BULLETS
        bullets[i].update();
        bullets[i].collision();
        bullets[i].render();
    }

    for (var i = 0; i < aliens.length; i++) {           //ALIENS
        aliens[i].update();
        aliens[i].path();
        aliens[i].render();
    }

    for (var i = 0; i < blocks.length; i++) {           //BLOCKS
        blocks[i].update();
        blocks[i].render();
    }

    for (var i = 0; i < powerUps.length; i++) {        //POWERUPS
        powerUps[i].update();
        powerUps[i].render();
    }

    for (var i = 0; i < particles.length; i++) {        //PARTICLES
        particles[i].update();
        particles[i].render();
    }

    scoreDisplay.update(gM.totalScore);
    scoreDisplay.render();

    levelDisplay.update(gM.level);
    levelDisplay.render();

    if (gM.win > 0) {
        if (gM.win === 1) {
            noStroke();
            fill(0);
            rect(canvasx / 2, canvasy / 2, canvasx, canvasy);

            winLoseDisplay.update("SCORE: " + gM.totalScore);
            winLoseDisplay.render();

            tipDisplay.update("PRESS SHIFT TO RESTART");
            tipDisplay.render();
        }
        if (gM.win === 2) {
            gM.reset("soft");
            gM.speed += 0.05;
        }
    }

    pM.update();                                        //UPDATE PARTICLE MANAGER
    gM.update();                                        //UPDATE GAME MANAGER


    if (keyIsDown(RIGHT_ARROW))                         //USER INPUT
        p.pos.x += 3;
    if (keyIsDown(LEFT_ARROW))
        p.pos.x -= 3;

    boomTimer++;   
    gM.timer++;                                         //USED TO LIMIT BULLETS
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        p.boom();
    }

    if (keyCode === SHIFT && gM.gameLive === false) {
        gM.reset("hard");
    }
}

function windowSizeCheck() {
    if (windowWidth > 700) {
        return 700;
    } else {
        return windowWidth;
    }
}
