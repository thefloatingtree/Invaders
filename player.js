function playerObject () {
    this.boomSpeed = 20;

    this.pos = createVector(canvasx/2,canvasy-5);

    this.render = function() {
        noStroke();                                  
        fill(255);
        rect(this.pos.x, this.pos.y, 50, 5);
        rect(this.pos.x, this.pos.y - 5, 20, 10);
    }

    this.boom = function() {
        if (boomTimer >= this.boomSpeed) {
            bullets.push(new bulletObject());               //Creates Bullet

            fires.push(new fire(this.pos.x, canvasy - 10));      //Creates Fire Partical effect
            fires[fires.length - 1].spawn();

            boomTimer = 0;                                      //Resets boomTimer
        }
    }
}