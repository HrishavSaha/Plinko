const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;

var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var count = 5;

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
  
  for(var i = 20;i<=width;i=i+20){
    plinkos.push(new Plinko(i,75));
  }

  for(var i = 15;i<=width;i=i+20){
    plinkos.push(new Plinko(i,175));
  }

  //trigger = new Trigger(240);
}


function draw() {
  background("white");
  Engine.update(engine);

  textSize(12);
  text("200", 190,440);
  text("200", 270,440);
  text("100", 110,440);
  text("100", 350,440);
  text("50", 30,440);
  text("50", 430,440);

  text("Score: " + score, 220, 300);
  text("Count: " + count, 220, 280);

  for(var i = 0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  //if(frameCount % 90 === 0){
  //  var i = random(50,width-50);
  //  particles.push(new Particle(i, 10));
  //}

  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }

  platform.display();

  //trigger.display();

  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);

  if(count === 0){
    textSize(30);
    text("GAME OVER",160,240);
  }
}

function mousePressed(){
  if(count > 0){
    particles.push(new Particle(mouseX, 10));
    count = count - 1;
  }
}

function keyPressed(){
  if(keyCode === 32){
    count = 5;
    score = 0;
    particles = [];
  }
}