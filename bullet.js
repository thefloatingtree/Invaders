function bulletObject() {
    this.pos = createVector(p.pos.x, canvasy - 20);
    this.live = true;
    
    this.collision = function() {
        for (var i = 0; i < aliens.length; i++) {
            if (aliens[i].live && this.live) {
                if (this.pos.x <= aliens[i].pos.x + aliens[i].size/2 && this.pos.x >= aliens[i].pos.x - aliens[i].size/2 && this.pos.y <= aliens[i].pos.y + aliens[i].size/3 && this.pos.y >= aliens[i].pos.y - aliens[i].size/2) {
                    aliens[i].live = false;
                    this.live = false;
                    
                    gM.score++;
                    sM.addScore(1);
                    
                    explosions.push(new explosion(this.pos.x,this.pos.y));
                    explosions[explosions.length - 1].spawn();
                }
            }
        }
        for (var i = 0; i < blocks.length; i++) {
            if (this.live) {
                if (this.pos.x <= blocks[i].pos.x + blocks[i].size && this.pos.x >= blocks[i].pos.x - blocks[i].size && this.pos.y <= blocks[i].pos.y + blocks[i].size/2 && this.pos.y >= blocks[i].pos.y - blocks[i].size/2) {
                    this.live = false;

                    sM.addScore(0.1);
    
                    explosions.push(new explosion(this.pos.x,this.pos.y));
                    explosions[explosions.length - 1].spawn();
                }
            }
        }
        for (var i = 0; i < powerUps.length; i++) {
            if (powerUps[i].live && this.live) {
                if (this.pos.x <= powerUps[i].pos.x + powerUps[i].size/2 && this.pos.x >= powerUps[i].pos.x - powerUps[i].size/2 && this.pos.y <= powerUps[i].pos.y + powerUps[i].size/2 && this.pos.y >= powerUps[i].pos.y - powerUps[i].size/2) {
                    this.live = false;
                    p.boomSpeed = 10;
                    powerUps[i].live = false;

                    sM.addScore(10);
                    
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
        this.pos.y -= 4;
    }
    
}
