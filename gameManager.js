function gameManager () {
    this.gameLive = true;
    this.win = 0;
    this.score = 0;
    this.totalScore = 0;
    this.level = 1;
    this.powerUpActive = false;
    this.busy = false;
    this.speed = 0.7;
    this.timer = 0;
    this.endGameLine = canvasy - 150;
    this.version = "1.2.1"
    
    this.checkWinLose = function() {
        if (this.gameLive) {
            if (this.score < 0) {
                console.log("lost");
                this.win = 1;
                this.gameLive = false;
            }
            if (this.score === aliens.length) {
                console.log("win");
                this.win = 2;
                this.gameLive = false;
                
                this.level++;
            }
        }
    }
    
    this.update = function() {
        this.checkWinLose();

        if (this.level % 2 === 0 && !this.powerUpActive && Math.round(random(0,50)) > 48) {
            this.powerUpActive = true;
            powerUps.push(new powerUpObject(random(0,1)));
            tipDisplay.update("50% Faster Shots!");
        }

        // if (p.boomSpeed < 20 && !this.busy) {
        //     this.busy = true;
        //     setTimer();
        // } 
    }
    
    this.spawnAliens = function() {
        var yoff = 25;
        aliens.push(new alienObject(0,0+yoff));                  //CREATES ALIENS IN GRID
        aliens.push(new alienObject(-50,0+yoff));
        aliens.push(new alienObject(50,0+yoff));
        aliens.push(new alienObject(0,50+yoff));
        aliens.push(new alienObject(-50,50+yoff));
        aliens.push(new alienObject(50,50+yoff));
        aliens.push(new alienObject(-100,0+yoff));
        aliens.push(new alienObject(100,0+yoff));
        aliens.push(new alienObject(-100,50+yoff));
        aliens.push(new alienObject(100,50+yoff));
        aliens.push(new alienObject(0,100+yoff));
        aliens.push(new alienObject(-50,100+yoff));
        aliens.push(new alienObject(50,100+yoff));
        aliens.push(new alienObject(0,150+yoff));
        aliens.push(new alienObject(-50,150+yoff));
        aliens.push(new alienObject(50,150+yoff));
        aliens.push(new alienObject(-100,100+yoff));
        aliens.push(new alienObject(100,100+yoff));
        aliens.push(new alienObject(-100,150+yoff));
        aliens.push(new alienObject(100,150+yoff));
    }

    this.spawnBlocks = function() {
        blocks.push(new blockObject(canvasx/2,this.endGameLine));
        blocks.push(new blockObject(canvasx * 0.25,this.endGameLine));
        blocks.push(new blockObject(canvasx * 0.75,this.endGameLine));
    }
     
    this.reset = function(full) {
        if (full === "hard") {
            this.gameLive = true;
            this.win = 0;
            this.score = 0;
            this.totalScore = 0;
            this.level = 1;
            this.speed = 0.9;
            this.powerUpActive = false;
            this.timer = 0;
            p.boomSpeed = 20;

            timer = 60;
            x = canvasx/2;

            pM.cleanUp();
            bullets.length = 0;
            aliens.length = 0;

            this.spawnAliens();
        } else {
            this.gameLive = true;
            this.win = 0;
            this.score = 0;
            this.powerUpActive = false;
            p.boomSpeed = 20;

            timer = 60;

            pM.cleanUp();
            bullets.length = 0;
            aliens.length = 0;

            this.spawnAliens();
            console.log(this.speed);
        }
    }
}

function setTimer() {
}