function gameManager () {
    this.gameLive = true;
    this.win = 0;
    this.score = 0;
    this.totalScore = 0;
    this.level = 1;
    this.speed = 0.9;
    
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
    
    this.spawnAliens = function() {
        aliens.push(new alienObject(0,0));                  //CREATES ALIENS IN GRID
        aliens.push(new alienObject(-50,0));
        aliens.push(new alienObject(50,0));
        aliens.push(new alienObject(0,50));
        aliens.push(new alienObject(-50,50));
        aliens.push(new alienObject(50,50));
        aliens.push(new alienObject(-100,0));
        aliens.push(new alienObject(100,0));
        aliens.push(new alienObject(-100,50));
        aliens.push(new alienObject(100,50));
        aliens.push(new alienObject(0,100));
        aliens.push(new alienObject(-50,100));
        aliens.push(new alienObject(50,100));
        aliens.push(new alienObject(0,150));
        aliens.push(new alienObject(-50,150));
        aliens.push(new alienObject(50,150));
        aliens.push(new alienObject(-100,100));
        aliens.push(new alienObject(100,100));
        aliens.push(new alienObject(-100,150));
        aliens.push(new alienObject(100,150));
    }
    
    this.reset = function(full) {
        if (full === "hard") {
            this.gameLive = true;
            this.win = 0;
            this.score = 0;
            this.totalScore = 0;
            this.level = 1;
            this.speed = 0.9;

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

            timer = 60;

            pM.cleanUp();
            bullets.length = 0;
            aliens.length = 0;

            this.spawnAliens();
            console.log(this.speed);
        }
    }
}