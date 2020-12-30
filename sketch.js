const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,60,options);
  World.add(world,ball);
  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);

  circle(ball.position.x,ball.position.y,60);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);
}