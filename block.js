function blockObject(x,y) {
    this.pos = createVector(x,y);
    this.size = 30;
    this.live = true;

    this.render = function() {
        rectMode(CENTER);
        noStroke();
        fill(255);
        rect(this.pos.x,this.pos.y,this.size * 2,this.size - 10);
    }

    this.update = function() {

    }
}