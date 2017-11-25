function powerUpObject (type) {
    this.size = 25;
    this.pos = createVector(-this.size, 100);
    this.type = type;
    this.live = true;

    this.render = function() {
        if (this.live) {
            rectMode(CENTER);
            noStroke();
            if (this.type === 0) {
                fill("blue");
            } else {
                fill("red");
            }
            rect(this.pos.x,this.pos.y,this.size, this.size);
        }
    }

    this.update = function() {
        if (this.live) {
            if (this.pos.x - this.size > canvasx) {
                this.live = false;
            }
    
            this.pos.x += 0.5;
        }
    }
}