function bulletObject() {
    this.pos = createVector(x, canvasy - 20);
    this.live = true;
    
    this.collision = function() {
        for (var i = 0; i < aliens.length; i++) {
            if (aliens[i].live && this.live) {
                if (this.pos.x <= aliens[i].pos.x + aliens[i].size/2 && this.pos.x >= aliens[i].pos.x - aliens[i].size/2 && this.pos.y <= aliens[i].pos.y + aliens[i].size/3 && this.pos.y >= aliens[i].pos.y - aliens[i].size/2) {
                    aliens[i].live = false;
                    this.live = false;
                    
                    gM.score++;
                    gM.totalScore++;
                    
                    explosions.push(new explosion(this.pos.x,this.pos.y));
                    explosions[explosions.length - 1].spawn();
                }
            }
        }
    }
    
    this.render = function() {
        if (this.live) {
            noStroke();
            fill(255);
            rect(this.pos.x,this.pos.y,7,10);
        }
    }
    
    this.update = function() {
        this.pos.y -= 2;
    }
    
}