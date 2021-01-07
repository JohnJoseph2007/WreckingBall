class Ball {
    constructor(x, y) {
        var options = {
            restitution : 0.3,
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.body = b.circle(x, y, 50, options);
        world.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        fill(128);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 70);
    }
}