class Ground {
    constructor(x, y, w, h){
        var gr = {
            isStatic : true
        }

        this.ground = b.rectangle(x, y, w, h, gr);
        this.width = w;
        this.height = h;
        world.add(wo, this.ground);
    }

    display(){
        fill("brown");
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}