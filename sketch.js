//SPACE INVADERS//
//Jacob Perry//

//VARIABLES & ARRAYS
var x;                  //player
var bullets = [];       //object arrays
var aliens = [];
var particles = [];
var explosions = [];
var fires = [];         

var timer = 60;         //misc
var canvasx;
var canvasy;

p5.disableFriendlyErrors = true;

function setup() {
    canvasx = windowWidth; //Sets size of canvas
    canvasy = windowHeight;  
    
    createCanvas(canvasx,canvasy);             //BASIC SETUP
    rectMode(CENTER);
    
    frameRate(60);
    
    pM = new particleManager();                         //CREATES PARTICLE MANAGER
    gM = new gameManager();
    
    scoreDisplay    =   new Display("Score: ", gM.totalScore, 15,30, 24, 255,255,255,"RIGHT");
    levelDisplay    =   new Display("L ", gM.level, canvasx/2,30, 24, 255,255,255,"CENTER");
    winLoseDisplay  =   new Display("","", canvasx/2,canvasy/2 - 50, 28, 255,0,0,"CENTER");
    tipDisplay      =   new Display("","", canvasx/2,canvasy/2 + 10, 20, 255,255,255,"CENTER");
    
    gM.spawnAliens(0);
    
    x = canvasx/2;                                  //PLAYER
}

function draw() {
    background(0);                                     //REFRESHES BG
    noStroke();
    fill("red");                                        //DRAWS END GAME LINE
    rect(canvasx/2, canvasy - 50, canvasx, 5);

    noStroke();                                         //PLAYER ToDo: needs to be in its own object
    fill(255);
    rect(x, canvasy - 5, 50, 5);
    rect(x, canvasy - 10, 20, 10);
    
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
            rect(canvasx/2,canvasy/2,canvasx,canvasy);
            
            winLoseDisplay.update("YOU LOST");
            winLoseDisplay.render();
            
            tipDisplay.update("PRESS SHIFT TO RESTART");
            tipDisplay.render();
        }
        if (gM.win === 2) {
            gM.reset("soft",0.2);
        }
    }
    
    pM.update();                                        //UPDATE PARTICLE MANAGER
    gM.update();                                        //UPDATE GAME MANAGER
    
    
    if (keyIsDown(RIGHT_ARROW))                         //USER INPUT
        x += 3;
    if (keyIsDown(LEFT_ARROW))
        x -= 3;
    
    timer++;                                            //USED TO LIMIT BULLETS
}

function keyPressed() { 
    if (keyCode == UP_ARROW) {
        if (timer >= 25) {
            bullets.push(new bulletObject());               //Creates Bullet
            
            fires.push(new fire(x,canvasy - 10));      //Creates Fire Partical effect
            fires[fires.length - 1].spawn();
            
            timer = 0;                                      //Resets timer
        }
    }
    
    if (keyCode === SHIFT && gM.gameLive === false) {
        gM.reset("full",0);
    }
}