function Display(lable, display, x, y, size, colorr, colorg, colorb, alignment) {
    this.pos = createVector(x,y);
    this.display = toString(display);
    this.lable = lable;
    this.size = size;
    this.align = alignment;
    
    this.update = function(display) {
        this.display = display;
    }
    
    this.render = function() {
        textSize(this.size);
        if (this.align === "CENTER") {
            textAlign(CENTER);
        } else if (this.align === "LEFT") {
            textAlign(LEFT);
        } else {
            textAlign(RIGHT);
        }
        fill(colorr,colorg,colorb);
        text(this.lable + this.display, this.pos.x, this.pos.y);
    }
}