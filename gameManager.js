function gameManager () {
    this.gameLive = true;
    this.win = 0;
    this.score = 0;
    this.totalScore = 0;
    this.level = 1;
    
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
    }
    
    this.spawnAliens = function(difMult) {
        aliens.push(new alienObject(0,0,difMult));                  //CREATES ALIENS IN GRID
        aliens.push(new alienObject(-50,0,difMult));
        aliens.push(new alienObject(50,0,difMult));
        aliens.push(new alienObject(0,50,difMult));
        aliens.push(new alienObject(-50,50,difMult));
        aliens.push(new alienObject(50,50,difMult));
        aliens.push(new alienObject(-100,0,difMult));
        aliens.push(new alienObject(100,0,difMult));
        aliens.push(new alienObject(-100,50,difMult));
        aliens.push(new alienObject(100,50,difMult));
        aliens.push(new alienObject(0,100,difMult));
        aliens.push(new alienObject(-50,100,difMult));
        aliens.push(new alienObject(50,100,difMult));
        aliens.push(new alienObject(0,150,difMult));
        aliens.push(new alienObject(-50,150,difMult));
        aliens.push(new alienObject(50,150,difMult));
        aliens.push(new alienObject(-100,100,difMult));
        aliens.push(new alienObject(100,100,difMult));
        aliens.push(new alienObject(-100,150,difMult));
        aliens.push(new alienObject(100,150,difMult));
    }
    
    this.reset = function(full, difMult) {
        if (full === "full") {
            this.gameLive = true;
            this.win = 0;
            this.score = 0;

            timer = 60;
            x = canvasx/2;

            pM.cleanUp();
            bullets.length = 0;
            aliens.length = 0;

            this.spawnAliens(difMult);
        } else {
            this.gameLive = true;
            this.win = 0;
            this.score = 0;

            timer = 60;

            pM.cleanUp();
            bullets.length = 0;
            aliens.length = 0;

            this.spawnAliens(difMult);
            console.log(speed);
        }
    }
}