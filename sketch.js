const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;

var particles = [];
var plinkos = [];
var divisions = [];

var DHeight = 400;

function setup() {
  createCanvas(480,800);
  console.log(height);
  console.log(width);

  engine = Engine.create();
  world = engine.world;

  platform = new Ground(240,790,480,20);

  for(var i = 0;i<=width;i=i+80){
    divisions.push(new Division(i,height-DHeight/2,10,DHeight));
  }
  
  for(var i = 40;i<=width;i=i+30){
    plinkos.push(new Plinko(i,75));
  }

  for(var i = 15;i<=width;i=i+30){
    plinkos.push(new Plinko(i,175));
  }
}


function draw() {
  background("white");
  Engine.update(engine);

  for(var i = 0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount % 90 === 0){
    var i = random(50,width-50);
    particles.push(new Particle(i, 10));
  }

  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }

  platform.display();

}

