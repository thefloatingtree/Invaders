//PARTICAL MA

function particleManager () { //PARTICLE MANAGER -- Makes sure all resources are used effectively
    this.particleAlive = false;
    
    this.allDead = function() {                      //Runs through all onscreen particles, returns if they've ALL died
        this.deadCount = 0;
        
        for (var i = 0; i < particles.length; i++) {
            if (particles[i].isDead()) {            
                this.deadCount++;
            } 
        }
        
        if (this.deadCount === particles.length) {
            return true;
        } else {
            return false;
        }
    }
    
    this.cleanUp = function() {                      //Clears all the arrays containing particles and particle systems
        this.particleAlive = false;
        //console.log("clean");
        
        particles.length = 0;
        explosions.length = 0;
        fires.length = 0;
        
        //New systems go here//
    }
    
    this.update = function() {                       //Checks whether every particle onscreen is dead, if so, run 
        if (this.particleAlive) {                    //cleanUp()
            if (this.allDead()) {
                this.cleanUp();
            } 
        }
    }
}

//PARTICAL SYSTEMS//

function explosion (x,y) { //EXPLOSION PARTICLE -- Makes an explosion at a specified x,y
    this.pos = createVector(x,y);
    
    this.spawn = function() {
        pM.particleAlive = true;
        
        for (var i = 0; i < 10; i++) {               
            this.vel = random(2.5,4.5);
            this.lifedecay = random(1,15);
            this.angle = random(0,2*PI);
            this.size = random(4,6);
            
            particles.push(new particleObject(this.pos.x,this.pos.y,this.size,this.angle,this.vel,0.9,255,this.lifedecay,"square"));
            particles[particles.length - 1].direction();
        }
    }
    
}

function fire (x,y) { //FIRE PARTICLE -- Makes gun fire particle at a specified x,y
    this.pos = createVector(x,y);
    
    this.spawn = function() {
        pM.particleAlive = true;
        
        for (var i = 0; i < 6; i++) {               
            this.vel = random(2,4);
            this.lifedecay = random(10,25);
            this.angle = random(-PI/2+0.7,-PI/2-0.7);
            this.size = random(4,7);
            
            particles.push(new particleObject(this.pos.x,this.pos.y,this.size,this.angle,this.vel,0.9,255,this.lifedecay,"square"));
            particles[particles.length - 1].direction();
        }
    }
    
}

//IMPORTANT: When creating new partical System Instances, be sure to call .spawn() after you create your instance.

//Notes: When creating new particle Systems, you have to run the direction method, otherwise your particle will 
//not move. It is also important to tell the particle Manager that you have created a new particle System,
//otherwise the Manager will not be able to properly clean up.

//-PI/2 === UP