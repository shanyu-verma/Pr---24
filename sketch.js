
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dust,dust2,dust3;

function preload()
{
	ballI = loadImage("download.jpg");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,450,40);
	ground = new Ground(800,690,1600,30);
	dust = new Dustbin(1190,610,20,120);
	dust2 = new Dustbin(1410,610,20,120);
	dust3 = new Dustbin(1300,660,200,20);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
		
	
	

	drawSprites();
	  
	ball.display();
	ground.display();
	dust.display();
	dust2.display();
	dust3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-100});
	}
}

