
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(50,70,50,30);
  ground2 = new Ground(150,370,30,50);
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
//console.log(ground.position.y);
ground1.show();
ground2.show();
  
  
}
