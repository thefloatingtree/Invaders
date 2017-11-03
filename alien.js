function alienObject(xoff, yoff) {
//    this.randOffx = random(0,20);
//    this.randOffy = random(0,7);
    this.randOffx = 0;
    this.randOffy = 0;
    this.pos = createVector(canvasx/2 + xoff + this.randOffx, 55 + yoff + this.randOffy);
    this.refpos = createVector(canvasx/2 + xoff + this.randOffx, 75 + yoff + this.randOffy);
    this.speed = gM.speed;
    this.dir = createVector(this.speed,0);
    this.live = true;
    this.right = true;
//    this.size = random(17,30);
    this.size = 25;
    this.counter = 0;
    this.lifetime = 0;
    
    this.collision = function() {
        if (this.pos.y + this.size/2 >= canvasy - 50 && this.live === true && gM.gameLive === true) {
            gM.score -= 100;
        }
    }
    
    this.path = function() {
        if (this.pos.x > this.refpos.x + canvasx/6 || this.pos.x < this.refpos.x - canvasx/6) { //Moves left/right
            this.dir.x = 0;
            this.dir.y = this.speed;
        }
        if (this.dir.y === this.speed) { //Moves down
            this.counter++;
            if (this.counter >= 40) {
                if (!this.right) {
                    this.right = true;
                    this.dir.x = this.speed;
                    this.dir.y = 0;
                } else {
                    this.right = false;
                    this.dir.x = -this.speed;
                    this.dir.y = 0;
                }
                this.counter = 0;
            }
        }
    }
    
    this.render = function() {
        if (this.live) {
            noStroke();
            fill(255);
            rect(this.pos.x,this.pos.y,this.size,this.size);
            }
    }
    
    this.update = function() {
        this.speed += this.lifetime/1500000;
        this.collision();
        this.pos.add(this.dir);
        this.lifetime++;
    }
}
