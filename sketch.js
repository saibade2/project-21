
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,ball,ball_optiions,wall1,wall2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ball_optiions= {
		restitution:0.95,
		frictionAir:0.01,
	  }
	  ball = Bodies.circle(100,10,20,ball_optiions) 
	  World.add(world,ball)
	  
	  ground = new Ground(150,680,1300,20) 
	  wall1 = new Ground(560,600,20,150)
	  wall2= new Ground(710,600,20,150)
	 
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  wall1.display()
  wall2.display()
  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.98})
    }
}


