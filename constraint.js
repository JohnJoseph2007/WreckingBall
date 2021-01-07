class Constraint {
    constructor(bodya, pointb) {
        var options = {
            bodyA : bodya,
            pointB : pointb,
            length : 700,
            stiffness : 1
        }
        this.body = Matter.Constraint.create(options);
        world.add(wo, this.body);
        this.a = bodya;
    }

    display() {
        if(this.body.bodyA) {
            var posa = this.body.bodyA.position;
            var pb = this.body.pointB;
            push();
            strokeWeight(2);
            stroke(48, 22, 8);
            this.line1 = line(posa.x, posa.y, pb.x, pb.y);
            pop();
        }
    }
}