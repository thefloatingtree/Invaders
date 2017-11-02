function particleObject(x,y,size,ang,vel,veldecay,life,lifedecay,type) {   // BASIC PARTICLE -- Creates a single particle
    this.pos = createVector(x,y);                                           // used by particle systems to create effects
    this.vel = createVector(0,0);                                           // ARGUMENT LIST:
    this.heading = ang;                             //x,y,size,ang1,ang2,vel,veldecay,life,lifedecay
    this.size = size;
    this.lifespan = life;
    
    this.direction = function() {
        var force = p5.Vector.fromAngle(this.heading);
        this.vel.add(force.mult(vel));
    }
    
    this.isDead = function() {
        if (this.lifespan >= 0) {
            return false;
        } else {
            return true;
        }
    }
    
    this.render = function() {
        if (type === "square") {
            noStroke();
            fill(255,this.lifespan);
            rect(this.pos.x,this.pos.y,this.size,this.size);
        }
        if (type === "circle") {
            noStroke();
            fill(255,this.lifespan);
            ellipse(this.pos.x,this.pos.y,this.size,this.size);
        }
    }
    
    this.update = function() {
        this.pos.add(this.vel);
        this.vel.mult(veldecay);
        this.lifespan -= lifedecay;
    }
    
}