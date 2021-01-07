class Boxes {
    constructor(x, y, w, h) {
        var options = {restitution:0.5, isStatic:false, friction:0.5};
        this.body = b.rectangle(x, y, w, h, options);
        world.add(wo, this.body);
        this.tintspeed = 255;
        this.w = w;
        this.h = h;
    }

    score() {
        if(this.tintspeed < 0 && this.tintspeed > -505) {
            score++;
        }
    }


    display() {
        var pos =this.body.position;
        push();
        tint(255, this.tintspeed);
        this.tintspeed -=5;
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}