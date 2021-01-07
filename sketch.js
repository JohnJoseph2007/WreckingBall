const e = Matter.Engine;
const world = Matter.World;
const b = Matter.Bodies;

var en, wo;
var r = [];

function setup() {
  en = e.create();
  wo = en.world;
  createCanvas(displayWidth, displayHeight-111);
  gr = new Ground(displayWidth/2, ((displayHeight-111)/2)+450, displayWidth, 20);
  for(var i = 150; i < 891; i+=148) {
    re = new Boxes(1570, i, random(100, 200), 148);
    r.push(re);
  }
  ba = new Ball(900, 390);
  cnstrnt = new Constraint(ba.body, {x:900, y:60});
}

function draw() {
  background(0);
  e.update(en);
  gr.display();
  for(var i = 0; i < r.length; i++) {
    r[i].display();
  }
  cnstrnt.display();
  ba.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ba.body, {x:mouseX, y:mouseY});
}

function keyPressed() {
  if(keyCode===32) {
    window.location.reload();
  }
}